SHELL:=/bin/bash -o pipefail
ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
APP_NAME:=app
PYTHON:=python3.9

all: dependencies

fresh: clean dependencies

testenv: clean_testenv test_build
	docker compose up --build

testenv_d: clean_testenv test_build
	docker compose up --build -d

test:
	docker compose exec api pytest -svv --disable-warnings -p no:cacheprovider /app/tests

clean_testenv:
	docker compose down -v

fresh_testenv: clean_testenv testenv

venv:
	if [ ! -d $(ROOT_DIR)/env ]; then $(PYTHON) -m venv $(ROOT_DIR)/env; fi

dependencies: venv
	source $(ROOT_DIR)/env/bin/activate; yes w | python -m pip install -r $(ROOT_DIR)/api/requirements.txt

clean: clean_testenv
	# Remove existing environment
	rm -rf $(ROOT_DIR)/env;
	rm -rf $(ROOT_DIR)/$(APP_NAME)/*.pyc;


build_fe:
	npm --prefix ./frontend/gpt4all.io install && CI=false DISABLE_ESLINT_PLUGIN=true npm --prefix ./frontend/gpt4all.io run build

deploy_fe:
	aws s3 cp ./frontend/gpt4all.io/build s3://gpt4all.io/ --recursive
