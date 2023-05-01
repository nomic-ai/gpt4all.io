import React from "react";

const CapabilityCard = (
    {
        header,
        description,
        gif
    }
) =>
{
    return (
        <div className='w-[450px] h-[380px] text-center border rounded-md flex flex-col gap-4 relative'>
            <div className="w-full h-full absolute top-0 left-0 conic"></div>
            <div className='w-full h-2/3'>
                {/* TODO: gif w/ pause state here. play on hover. */}
            </div>
            <div className='flex flex-col gap-2 px-12'>
                <h2 className='text-2xl font-semibold'>{header}</h2>
                <p className='text-sm font-normal leading normal'>
                {description}
                </p>
            </div>
        </div>
    )
}

export default CapabilityCard;