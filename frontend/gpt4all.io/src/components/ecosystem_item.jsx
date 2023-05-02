import React from  "react";

const EcosystemItem = (
    {
        icon,
        url,
        title,
        description
    }
) => 
{
    return (
        <div className="w-[200px] lg:w-[300px] h-24 rounded-md bg-slate-50 p-4 flex flex-col" onClick={()=> window.open(url, "_blank")} style={{cursor: 'pointer'}}>
            <div className="flex flex-row gap-2">
                <img
                    src={icon}
                    className="w-8 h-8 rounded-full"
                    alt="#"
                />
                <h2 className="font-semibold">{title}</h2>
            </div>
            <span className="text-slate-400 text-xs pt-2">
                {description}
            </span>
        </div>
    )
}

export default EcosystemItem;