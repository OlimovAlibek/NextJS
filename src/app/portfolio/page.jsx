"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-blue-300 to-red-300 ",
    title: "OY GUL",
    desc: "Marketplace of flowers in Uzbekistan. Contributed to real project with experienced team of developers during internship in Oy-Gul.uz",
    img: "/oygul.png",
    link: "https://oy-gul.uz",
  },
  {
    id: 2,
    color: "from-red-300 to-violet-300",
    title: "O'zbek O'quv Avtomatika",
    desc: "Developed dynamic informational website for company named O'zbek O'quv Avtomatika",
    img: "https://uzua.uz/wp-content/uploads/2022/09/logo-UUA-sinij.svg",
    link: "https://uzua.uz",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "OY TICKETS",
    desc: "Contributed to real project while working in OY STARTECH LLC",
    img: "/oytickets.png",
    link: "https://oytickets.uz",
  },
  {
    id: 4,
    color: "from-purple-300 to-blue-300",
    title: "Newish Journal",
    desc: "Created a website for University's journal and newspaper",
    img: "/newish.png",
    link: "https://newish.netlify.app",
  },
  {
    id: 5,
    color: "from-blue-300 to-red-300",
    title: "Cifra Energy Uz",
    desc: "Developed dynamic informational website while working in CifraEnergyUz",
    img: "/cifraenergy.png",
    link: "https://cifraenergy.uz",
  },
  {
    id: 6,
    color: "from-red-300 to-yellow-300",
    title: "Meddent",
    desc: "Created a single-page website for Meddent Stomotology",
    img: "https://meddent.uz/images/logo.png",
    link: "https://meddent.uz",
  },
  {
    id: 7,
    color: "from-yellow-300 to-blue-300",
    title: "Github",
    desc: "All other projects are in my Github",
    img: "/githubbig.png",
    link: "https://github.com/OlimovAlibek",
  },
  
  
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center dark:text-white">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center dark:bg-black">
        <h1 className="text-8xl dark:text-white">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text>
              <textPath xlinkHref="#circlePath" className="text-xl dark:text-white">
                Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:ring-white dark:ring-1"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;