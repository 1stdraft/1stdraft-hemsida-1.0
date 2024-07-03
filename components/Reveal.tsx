
"use client"
import React, { use, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    idx?: number;
}

export const Reveal = ({ children, width = "fit-content", idx = 1}: Props) => {

    return (
        <div style={{ position: "relative", width}}>
            <motion.div 
              variants={{
                hidden: {opacity: 0, y: 75},
                visible: (idx) => ({
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.25 * idx }
                }),
              }}

              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}

              custom={idx}

            >{children}
            </motion.div>
        </div>
    );
};