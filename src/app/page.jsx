"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle"; // Adjust the path if necessary

const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative flex justify-center items-center">
          <Image src="/heroA.png" alt="hero" fill className="object-contain rounded-lg" />
        </div>

        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight dark:text-white">Bringing Your Ideas to Life</h1>
          <p className="md:text-2xl text-gray-700 dark:text-gray-300">
            I specialize in creating dynamic and beautiful web applications. My focus is on crafting experiences that are visually appealing and highly functional. Let's build something amazing together.
          </p>
          <div className="w-full flex gap-4 justify-center lg:justify-start">
            <Link href="/portfolio" className="link-button ring-1 ring-black dark:ring-white bg-black text-white hover:bg-transparent hover:text-black dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white">
              View My Work
            </Link>
            <Link href="/contact" className="link-button ring-1 ring-black text-black hover:bg-black hover:text-white dark:ring-white dark:text-white dark:hover:bg-white dark:hover:text-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
    </motion.div>
  );
};

export default Homepage;
