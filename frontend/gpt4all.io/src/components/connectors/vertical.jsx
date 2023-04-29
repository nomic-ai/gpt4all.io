import React from "react";
import { motion } from "framer-motion";

const Vertical = () => {
    const path = "m197.32283 25.03412l-0.9763794 241.48032";
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
                d={path}
                stroke="black"
                strokeOpacity="0.2"
            />
            <path
                d={path}
                stroke="url(#pulse-1)"
                strokeLinecap="round"
                strokeWidth="2"
            />
            <defs>
                <motion.linearGradient
                animate={{
                    x1: [0, width * 2],
                    x2: [0, width],
                    y1: [height, height / 2],
                    y2: [height * 2, height]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
                id="pulse-1"
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#2EB9DF" stopOpacity="0" />
                <stop stopColor="#2EB9DF" />
                <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />
                </motion.linearGradient>
            </defs>
        </svg>
    )
}

export default Vertical;