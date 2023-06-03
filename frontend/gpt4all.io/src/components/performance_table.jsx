import React from "react";

const cols = [
    "Model", "BoolQ", "PIQA", "HellaSwag", "WinoGrande", "ARC-e", "ARC-c", "OBQA", "Avg"
];

const data = {
    "Model": ["GPT4All-J 6B v1.0", "GPT4All-J v1.1-breezy", "GPT4All-J v1.2-jazzy", "GPT4All-J v1.3-groovy", "GPT4All-J Lora 6B", "GPT4All LLaMa Lora 7B", "GPT4All 13B snoozy", "GPT4All Falcon", "Dolly 6B", "Dolly 12B", "Alpaca 7B", "Alpaca Lora 7B", "GPT-J 6.7B", "LLama 7B", "LLama 13B", "Pythia 6.7B", "Pythia 12B", "Fastchat T5", "Fastchat Vicu\u00f1a 7B", "Fastchat Vicu\u00f1a 13B", "StableVicu\u00f1a RLHF", "StableLM Tuned", "StableLM Base", "Koala 13B", "Open Assistant Pythia 12B", "Mosaic MPT7B", "Mosaic mpt-instruct", "Mosaic mpt-chat", "Wizard 7B", "Wizard 7B Uncensored", "Wizard 13B Uncensored", "GPT4-x-Vicuna-13b", "Falcon 7b", "Falcon 7b instruct", "text-davinci-003"],
    "BoolQ": [73.4, 74.0, 74.8, 73.6, 68.6, 73.1, 83.3, 77.6, 68.8, 56.7, 73.9, 74.3, 65.4, 73.1, 68.5, 63.5, 67.7, 81.5, 76.6, 81.5, 82.3, 62.5, 60.1, 76.5, 67.9, 74.8, 74.3, 77.1, 78.4, 77.7, 78.4, 81.3, 73.6, 70.9, 88.1],
    "PIQA": [74.8, 75.1, 74.9, 74.3, 75.8, 77.6, 79.2, 79.8, 77.3, 75.4, 77.2, 79.3, 76.2, 77.4, 79.1, 76.3, 76.6, 64.6, 77.2, 76.8, 78.6, 71.2, 67.4, 77.9, 78.0, 79.3, 80.4, 78.2, 77.2, 74.2, 75.5, 75.0, 80.7, 78.6, 83.8],
    "HellaSwag": [63.4, 63.2, 63.6, 63.8, 66.2, 72.1, 75.0, 74.9, 67.6, 71.0, 73.9, 74.0, 66.2, 73.0, 76.2, 64.0, 67.3, 46.3, 70.7, 73.3, 74.1, 53.6, 41.2, 72.6, 68.1, 76.3, 77.2, 74.5, 69.9, 68.0, 72.1, 75.2, 76.3, 69.8, 83.4],
    "WinoGrande": [64.7, 63.6, 63.8, 63.5, 63.5, 67.8, 71.3, 70.1, 63.9, 62.2, 66.1, 68.8, 64.1, 66.9, 70.1, 61.1, 63.8, 61.8, 67.3, 66.7, 70.9, 54.8, 50.1, 68.8, 65.0, 68.6, 67.8, 67.5, 66.5, 65.2, 69.5, 65.0, 67.3, 66.7, 75.8],
    "ARC-e": [54.9, 55.4, 56.6, 57.7, 56.4, 51.1, 60.9, 67.9, 62.9, 64.6, 59.8, 56.6, 62.2, 52.5, 60.0, 61.3, 63.9, 49.3, 53.5, 57.4, 61.0, 52.4, 44.9, 54.3, 64.2, 70.0, 72.2, 69.4, 56.8, 53.5, 57.5, 58.7, 71.0, 67.9, 83.9],
    "ARC-c": [36.0, 34.9, 35.3, 35.0, 35.7, 40.4, 44.2, 43.4, 38.7, 38.5, 43.3, 43.9, 36.6, 41.4, 44.6, 35.2, 34.8, 33.3, 41.2, 42.7, 43.5, 31.1, 27.0, 41.0, 40.4, 42.2, 44.6, 43.3, 40.5, 38.7, 40.4, 43.9, 43.3, 42.7, 63.9],
    "OBQA": [40.2, 38.4, 41.0, 38.8, 40.2, 40.2, 43.4, 42.6, 41.2, 40.4, 43.4, 42.6, 38.2, 42.4, 42.2, 37.2, 38.0, 39.4, 40.8, 43.6, 44.4, 33.4, 32.0, 42.8, 43.2, 42.6, 43.0, 44.2, 42.6, 41.6, 44.0, 43.6, 44.4, 41.2, 51.0],
    "average": []
}

const avg = array => (array.reduce((a, b) => a + b) / array.length);

for (let i = 0; i < data.Model.length; i++) {
    let total = 0;
    for (let j = 1; j < cols.length - 1; j++) {
        total += data[cols[j]][i];
    }
    data.average.push(total / (cols.length - 2));
}

const PerformanceTable = (

) => {
    const fidx = -1;
    return (
        <table className="border w-full xl:w-[800px] table-auto sm:mx-auto">
            <thead>
                <tr className="h-10 bg-black text-white">
                    {
                        cols.map((col, idx) =>
                            <th key={idx}>
                                {col}
                            </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.Model.map((model, idx) =>
                        <tr className={`text-center border-b h-9 ${model === "GPT4All 13B Snoozy" ? "bg-slate-200" : model === "text-davinci-003" ? "border-gray-300 border-t-4" : ""}`}>
                            <td className="border-r">{model}</td>
                            <td className={`${(data.BoolQ[idx] === Math.max(...data.BoolQ.slice(0, -1)) || fidx === data.BoolQ.length - 1) && "font-bold"}`}>{data.BoolQ[idx]}</td>
                            <td className={`${(data.PIQA[idx] === Math.max(...data.PIQA.slice(0, -1)) || fidx === data.BoolQ.length - 1) && "font-bold"}`}>{data.PIQA[idx]}</td>
                            <td className={`${(data.HellaSwag[idx] === Math.max(...data.HellaSwag.slice(0, -1)) || fidx === data.BoolQ.length - 1) && "font-bold"}`}>{data.HellaSwag[idx]}</td>
                            <td className={`${(data.WinoGrande[idx] === Math.max(...data.WinoGrande.slice(0, -1)) || fidx === data.BoolQ.length - 1) && "font-bold"}`}>{data.WinoGrande[idx]}</td>
                            <td className={`${(data["ARC-e"][idx] === Math.max(...data["ARC-e"].slice(0, -1)) || fidx === data.BoolQ.length - 1) && "font-bold"}`}>{data["ARC-e"][idx]}</td>
                            <td className={`${(data["ARC-c"][idx] === Math.max(...data["ARC-c"].slice(0, -1)) || fidx === data.BoolQ.length - 1) && "font-bold"}`}>{data["ARC-c"][idx]}</td>
                            <td className={`${(data.OBQA[idx] === Math.max(...data.OBQA.slice(0, -1)) || fidx === data.BoolQ.length - 1) && "font-bold"}`}>{data.OBQA[idx]}</td>
                            <td className={`${(data.average[idx] === Math.max(...data.average.slice(0, -1)) || fidx === data.average.length - 1) && "font-bold"}`}>{data.average[idx].toFixed(1)}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}


const PerformanceTableMobile = (

) => {
    return (
        <div className="w-full">
            {
                data.Model.map((model, idx) =>
                    <table className="mb-4 w-full table-auto border text-center">
                        <tr className="border-b h-9 bg-zinc-100">
                            <td>Model</td>
                            <td className={`${model === "GPT4All LLaMa 13B" && "font-bold"}`}>{model}</td>
                        </tr>
                        <tr className="border-b- h-9">
                            <td>BoolQ</td>
                            <td className={`${data.BoolQ[idx] === Math.max(...data.BoolQ) && "font-bold"}`}>{data.BoolQ[idx]}</td>
                        </tr>
                        <tr className="border-b- h-9">
                            <td>PIQA</td>
                            <td className={`${data.PIQA[idx] === Math.max(...data.PIQA) && "font-bold"}`}>{data.PIQA[idx]}</td>
                        </tr>
                        <tr className="border-b- h-9">
                            <td>HellaSwag</td>
                            <td className={`${data.HellaSwag[idx] === Math.max(...data.HellaSwag) && "font-bold"}`}>{data.HellaSwag[idx]}</td>
                        </tr>
                        <tr className="border-b- h-9">
                            <td>WinoGrade</td>
                            <td className={`${data.WinoGrande[idx] === Math.max(...data.WinoGrande) && "font-bold"}`}>{data.WinoGrande[idx]}</td>
                        </tr>
                        <tr className="border-b- h-9">
                            <td>ARC-e</td>
                            <td className={`${data["ARC-e"][idx] === Math.max(...data["ARC-e"]) && "font-bold"}`}>{data["ARC-e"][idx]}</td>
                        </tr>
                        <tr className="border-b- h-9">
                            <td>ARC-c</td>
                            <td className={`${data["ARC-c"][idx] === Math.max(...data["ARC-c"]) && "font-bold"}`}>{data["ARC-c"][idx]}</td>
                        </tr>
                        <tr className="border-b- h-9">
                            <td>OBQA</td>
                            <td className={`${data.OBQA[idx] === Math.max(...data.OBQA) && "font-bold"}`}>{data.OBQA[idx]}</td>
                        </tr>
                        <tr className="border-b- h-9">
                            <td>Avg</td>
                            <td className={`${data.average[idx] === Math.max(...data.average) && "font-bold"}`}>{data.average[idx].toFixed(1)}</td>
                        </tr>
                    </table>

                )
            }
        </div>
    )
}

export { PerformanceTableMobile };

export default PerformanceTable;
