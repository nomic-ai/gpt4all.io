import React, { useState, useEffect } from "react";
import * as DOMPurify from "dompurify";
import { ArrowBigDownDash } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

const getModels = async () => {
    const response = await fetch("https://gpt4all.io/models/models.json");
    const jsonData = await response.json();
    return jsonData;
}

const ModelsTable = () =>
{
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState({});

    // TODO: handle errors
    useEffect(() => {
        async function fetchData() {
            const modelData = await getModels();
            setModels(modelData);
            setSelectedModel(modelData[0]);
        }
        fetchData();
    }, []);

    const onSelect = (val) => {
        models.forEach((obj,idx) => {

            if(obj.filename === val) {
                setSelectedModel(models[idx]);
            }
        });
    }

    return (
        <div className="flex flex-col justify-center gap-4 mx-auto">
            <h2 className="text-4xl font-bold text-center mb-2">Model Explorer</h2>
            <Select onValueChange={onSelect}>
                <SelectTrigger className="w-[300px] sm:w-[400px] mx-auto">
                    <SelectValue placeholder={models[0] && models[0].filename}/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Model Explorer</SelectLabel>
                        {
                            models.map((obj, idx) =>
                                <SelectItem value={obj.filename} key={idx}>{obj.filename}</SelectItem>
                            )
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            
            <div className="w-[600px] sm:w-[800px] py-4 border-t border-b border-dashed flex justify-center relative">
                <div className="absolute top-0 left-0 w-[600px] border-l border-r border-dashed translate-x-24 -translate-y-4 h-72"></div>
                <div className="w-[350px] sm:w-[400px] min-h-64 sm:min-h-56 relative p-4 rounded-md border shadow-md">
                    <div className="w-full h-full rounded-md bg-white p-4 flex flex-col relative">
                            <div className="border-b pb-2 mb-2">
                                <h4 className="text-xl font-bold">{selectedModel.filename}</h4>
                            </div>

                            <div dangerouslySetInnerHTML={
                                {
                                    __html: DOMPurify.sanitize(selectedModel.description)
                                }
                            }/>
                            
                            <a className="place-self-end" href={'url' in selectedModel ? `${selectedModel.url}` : `https://gpt4all.io/models/${selectedModel.filename}`}>
                                <ArrowBigDownDash className="w-6 h-6"/>
                            </a>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelsTable;