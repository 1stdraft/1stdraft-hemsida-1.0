"use client"

import { motion, useAnimation,useInView, useTransform, AnimatePresence } from "framer-motion";
import React, { use, useEffect, useRef } from "react";
import { useScrollContext } from "./ScrollProvider";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    idx?: number;
    delay?: number;
}

interface ParagraphProps {
  value: string;
  className: string;
  classNameWords: string;
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

export const RevealArtists = ({ children, width = "fit-content", idx = 1}: Props) => {

  const scrollYProgress = useScrollContext();

  const x = useTransform(scrollYProgress, [0,1], ["-10%", "10%"])
  const x2 = useTransform(scrollYProgress, [0,1], ["10%", "-10%"])

  const x3 = idx % 2 ? x : x2;
  // const y = useTransform(scrollYProgress.ScrollYProgress, [0,1], [0,1]);


    return (
        <div style={{ position: "relative", width}}>
            <motion.div 
              variants={{
                hidden: {opacity: 0, y: 75},
                visible: (idx) => ({
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.25 }
                }),
              }}

              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}

              custom={idx}

              style={{x: x3}}

              className="bg-blue text-white"
            >{children}
            </motion.div>
        </div>
    );
};

export const RevealCover = ({ children, width = "fit-content", idx = 1}: Props) => {

  return (
      <div style={{ position: "relative", width}}>
          <motion.div 
            variants={{
              hidden: {opacity: 0, y: 100},
              visible: (idx) => ({
                opacity: 1,
                y: 0,
                x: 0,
                transition: { ease: 'easeInOut', duration: 0.5, delay: 0.25}
              }),
            }}

            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}

            custom={idx}

          >{children}
          </motion.div>
      </div>
  );
};

export const RevealModal = ({ children, width = "fit-content", delay=0}: Props) => {

  return (
      <div style={{ position: "relative", width}}>
        <AnimatePresence>
          <motion.div 
          key="modal"
            variants={{
              hidden: {opacity: 0},
              visible: (idx) => ({
                opacity: 1,
                transition: { duration: 0.5, delay: 0.25 * delay}
              }),
            }}

            initial="hidden"
            animate="visible"
            exit={{opacity: 0, transition: { duration: 1 }}}
            custom={delay}
          >{children}
          </motion.div>
          </AnimatePresence>
      </div>
  );
};

export const RevealLogo = ({ children, width = "fit-content" }: Props) => {

  return (
          <motion.div 
            variants={{
              hidden: {opacity: 0},
              visible: () => ({
                opacity: 1,
                transition: { duration: 1, delay: 0.5}
              }),
            }}

            initial="hidden"
            animate="visible"
            viewport={{
              once: true
            }}
          >{children}
          </motion.div>
  );
};

export const WordReveal = ({ value, className, classNameWords }: ParagraphProps) => {


  const words = value.split(" ");

  return (
    <p className={className}>
     {words.map((word, i) => {
      return <motion.span variants={{
                hidden: {opacity: 0, y: 10},
                visible: (idx) => ({
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.2, delay: 0.1 * i }
                }),
              }}

              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}

              custom={i}
              className={classNameWords} key={i}>{word}</motion.span>
     })}
    </p>
  )
};



