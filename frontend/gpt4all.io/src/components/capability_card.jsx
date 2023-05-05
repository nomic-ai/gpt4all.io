import React, { useState } from "react";

const CapabilityCard = (
    {
        header,
        description,
        gif,
        still,
        alt
    }
) => {
    const [active, setActive] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div onClick={() => setShowModal(!showModal)} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}
            className='cursor-pointer w-full sm:w-[350px] xl:w-[450px] text-center border rounded-md 
                   flex flex-col gap-4 relative group'>
            <div className="w-full h-full absolute top-0 left-0 conic"></div>
            <div className='w-full h-[60%] relative'>
                <img
                    alt={alt || ''}
                    src={active ? gif : still}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className='flex flex-col gap-2 px-6 sm:px-12 my-auto'>
                <h2 className='text-xl font-semibold'>{header}</h2>
                <p className='text-sm font-normal leading-normal'>
                    {description}
                </p>
            </div>
            <div className={`${showModal === true ? "block" : "hidden"} fixed left-0 top-0 w-screen h-screen bg-slate-900/70 z-40 flex flex-col justify-center items-center`}>

                <img
                    alt={alt || ''}
                    src={gif}
                    className="w-[800px] rounded-md"
                />

            </div>
        </div>
    )
}

export default CapabilityCard;
