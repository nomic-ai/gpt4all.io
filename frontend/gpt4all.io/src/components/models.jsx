import React, { useState, useEffect } from "react";
import * as DOMPurify from "dompurify";
import { ArrowBigDownDash } from "lucide-react";

const getModels = async () => {
  const response = await fetch("https://gpt4all.io/models/models2.json");
  //const response = await fetch(
    //"https://raw.githubusercontent.com/nomic-ai/gpt4all/main/gpt4all-chat/metadata/models.json"
  //);
  const jsonData = await response.json();
  return jsonData;
};

const ModelsTable = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const modelData = await getModels();
      setModels(modelData);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-4 mx-auto">
      <div className="flex justify-end mt-4"></div>
      <h2 className="text-4xl font-bold text-center mb-2">Model Explorer</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white dark:bg-gray-800 p-4 border dark:border-gray-600 shadow-md flex flex-col justify-between hover:shadow-xl"
          >
            <div className="mt-0">
              <span className="inline-block bg-red-300 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                SIZE: {(model.filesize / 1024 ** 3).toFixed(2)} GB
              </span>
              <span className="inline-block bg-blue-300 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                RAM: {model.ramrequired} GB
              </span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">{model.filename}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(model.description),
                }}
                className="text-gray-600  mb-2"
              />
            </div>

            <div className="mt-3">
              <a
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                href={
                  "url" in model
                    ? `${model.url}`
                    : `https://gpt4all.io/models/${model.filename}`
                }
              >
                Download <ArrowBigDownDash className="w-4 h-6 inline" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsTable;
