import React from "react";
import { motion } from "framer-motion";

const Vertical = () => {
    const path = "m197.32283 25.03412l-0 241.48032";
    const width = 317;
    const height = 200;

    return (
        <svg
            width={width} 
            height={height} 
            viewBox={`0 0 ${width} ${height}`} 
            fill="none"
        >
            <path
                transform="translate(-20,0)"
                d={path}
                stroke="black"
                strokeOpacity="0.2"
            />
            <path
                transform="translate(-20,0)"
                d={path}
                stroke="url(#pulse-1)"
                strokeLinecap="round"
                strokeWidth="2"
            />
            <motion.path
                d={"m197.32283 25.03412-0 20"}
                stroke="gray"
                // transform="translate(-20,0)"
                animate={{
                    x:[-20, -20],
                    y:[0, height]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
            >
            </motion.path>
        </svg>
    )
}

export default Vertical;