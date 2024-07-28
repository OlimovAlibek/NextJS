"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle"; // Adjust the path if necessary

const text = "Bringing Your Ideas to Life";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const buttonVariants = {
  initial: { opacity: 1 },
  animate: { 
    opacity: [1, 0.5, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const imgVariants = {
  initial: { opacity: 1 },
  animate: { 
    opacity: [1, 0.7, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
    },
  },
};

const Homepage = () => {
  const initialText = "I specialize in creating dynamic and beautiful web applications. My focus is on crafting experiences that are visually appealing and highly functional. Let's build something amazing ";
  const finalText = "together:))))";
  const [displayText, setDisplayText] = useState(initialText);

  useEffect(() => {
    let forward = false;
    let index = initialText.length;

    const updateText = () => {
      setDisplayText((prevText) => {
        if (forward) {
          if (prevText.length >= initialText.length + finalText.length - 1) {
            forward = false;
          }
          return initialText + finalText.slice(0, prevText.length - initialText.length + 1);
        } else {
          if (prevText.length <= initialText.length) {
            forward = true;
          }
          return prevText.slice(0, -1);
        }
      });
      if (forward) {
        index++;
      } else {
        index--;
      }
    };

    const interval = setInterval(updateText, 150);

    return () => clearInterval(interval);
  }, [initialText, finalText]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <motion.div className="h-1/2 lg:h-full lg:w-1/2 relative flex justify-center items-center" variants={imgVariants} initial="initial" animate="animate">
          <Image src="/heroA.png" alt="hero" fill className="object-contain rounded-lg" />
        </motion.div>

        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center lg:text-left">
          <div className="text-5xl md:text-7xl font-bold leading-tight dark:text-white">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.p className="md:text-2xl text-gray-700 dark:text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: text.length * 0.1, duration: 1 }}>
            {displayText}
          </motion.p>
          <motion.div className="w-full flex gap-4 justify-center lg:justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: text.length * 0.1 + 1, duration: 1 }}>
            <motion.div variants={buttonVariants} initial="initial" animate="animate" className="w-auto">
              <Link href="/portfolio" className="link-button ring-1 ring-black dark:ring-white bg-black text-white hover:bg-transparent hover:text-black dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white px-4 py-2 rounded">
                View My Work
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} initial="initial" animate="animate" className="w-auto">
              <Link href="/contact" className="link-button ring-1 ring-black text-black hover:bg-black hover:text-white dark:ring-white dark:text-white dark:hover:bg-white dark:hover:text-black px-4 py-2 rounded">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
