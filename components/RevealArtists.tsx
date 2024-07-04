"use client"

import { motion, useAnimation,useInView, useTransform } from "framer-motion";
import React, { use, useContext, useEffect, useRef } from "react";
import { useScrollContext } from "components/ScrollProvider"

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    idx?: number;
}

export const RevealArtists = ({ children, width = "fit-content", idx = 1}: Props) => {

  const scrollYProgress = useScrollContext();
  // const y = useTransform(scrollYProgress.ScrollYProgress, [0,1], [0,1]);


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

              style={{x: scrollYProgress}}

            >{children}
            </motion.div>
        </div>
    );
};