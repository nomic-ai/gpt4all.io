import os
import boto3
from boto3.s3.transfer import TransferConfig
import time

def progress_callback(bytes_transferred, total_size, start_time):
    elapsed_time = time.time() - start_time
    speed = bytes_transferred / elapsed_time / 1024 if elapsed_time > 0 else 0
    percent_complete = 100.0 * bytes_transferred / total_size
    transferred_mb = bytes_transferred / (1024 * 1024)
    total_mb = total_size / (1024 * 1024)
    print(f"\rTransferred: {transferred_mb:.2f} MB / {total_mb:.2f} MB ({percent_complete:.2f}%) at {speed:.2f} KB/s", end='')

def upload_directory_to_s3(input_path, bucket_name, endpoint_url, aws_access_key_id, aws_secret_access_key, s3_prefix=""):
    transfer_config = TransferConfig(multipart_threshold=50 * 1024 * 1024)

    s3_client = boto3.client('s3',
                         endpoint_url=endpoint_url,
                         aws_access_key_id=aws_access_key_id,
                         aws_secret_access_key=aws_secret_access_key,
                         config=boto3.session.Config(connect_timeout=1800, read_timeout=1800))

    if not os.path.exists(input_path):
        raise ValueError("Input path does not exist")
    # Check if the provided path is a file or directory
    if os.path.isfile(input_path):  # Added this condition to handle the case when the input is a single file
        print("Uploading file")
        filename = os.path.basename(input_path)
        s3_path = os.path.join(s3_prefix, filename).replace("\\", "/")
        file_size = os.path.getsize(input_path)
        print(f"Uploading {input_path} to {bucket_name} at {s3_path}")
        start_time = time.time()
        s3_client.upload_file(input_path, bucket_name, s3_path, Config=transfer_config, Callback=lambda transferred: progress_callback(transferred, file_size, start_time))
        elapsed_time = time.time() - start_time
        print(f"\rUploaded {filename} ({file_size / 1024:.2f} KB) in {elapsed_time:.2f} seconds at {file_size / elapsed_time / 1024:.2f} KB/s")
    else:  # The existing code to handle the case when the input is a directory
        print("Uploading directory")
        top_level_directory = os.path.basename(input_path)

        for root, dirs, files in os.walk(input_path):
            for filename in files:
                local_path = os.path.join(root, filename)
                relative_path = os.path.relpath(local_path, input_path)
                if s3_prefix == "":
                    s3_path = os.path.join(top_level_directory, relative_path).replace("\\", "/")
                else:
                    s3_path = os.path.join(s3_prefix, top_level_directory, relative_path).replace("\\", "/")
                file_size = os.path.getsize(local_path)
                print(f"Uploading {local_path} to {bucket_name} at {s3_path}")
                start_time = time.time()
                s3_client.upload_file(local_path, bucket_name, s3_path, Config=transfer_config, Callback=lambda transferred: progress_callback(transferred, file_size, start_time))
                elapsed_time = time.time() - start_time
                print(f"\rUploaded {filename} ({file_size / 1024:.2f} KB) in {elapsed_time:.2f} seconds at {file_size / elapsed_time / 1024:.2f} KB/s")

if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='Upload a directory and all its contents to an S3 bucket.')
    parser.add_argument('input_path', type=str, help='The local directory or file to upload.')
    parser.add_argument('bucket_name', type=str, help='The name of the S3 bucket.')
    parser.add_argument('endpoint_url', type=str, help='The endpoint url.')
    parser.add_argument('aws_access_key_id', type=str, help='The AWS access key ID.')
    parser.add_argument('aws_secret_access_key', type=str, help='The AWS secret access key.')
    parser.add_argument('--s3-prefix', type=str, help='The prefix to add to the S3 path (optional).', default="")
    args = parser.parse_args()

    upload_directory_to_s3(args.input_path, args.bucket_name, args.endpoint_url, args.aws_access_key_id, args.aws_secret_access_key, args.s3_prefix)