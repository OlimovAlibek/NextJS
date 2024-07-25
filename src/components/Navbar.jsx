"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' }
];

const socialLinks = [
    { url: "https://github.com/OlimovAlibek", img: "/github.png", alt: "github" },
    { url: "https://linkedin.com/in/OlimovAlibek", img: "/linkedin.png", alt: "linkedin" },
    { url: "https://t.me/Olimov_Alibek", img: "/telegram.png", alt: "telegram" },
    { url: "https://instagram.com/Olimov__Alibek", img: "/instagram.png", alt: "instagram" },
    { url: "https://t.me/AlibekBlog", img: "/blog.png", alt: "blog"  }
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const topVariants = {
        closed: { rotate: 0 },
        opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" }
    };

    const centerVariants = {
        closed: { rotate: 0 },
        opened: { opacity: 0, backgroundColor: "rgb(255,255,255)" }
    };

    const bottomVariants = {
        closed: { rotate: 0 },
        opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" }
    };

    const listVariants = {
        closed: { x: "100vw" },
        opened: {
            x: 0,
            transition: { when: "beforeChildren", staggerChildren: 0.2 }
        }
    };

    const listItemVariants = {
        closed: { x: -10, opacity: 0 },
        opened: { x: 0, opacity: 1 }
    };

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl dark:bg-gray-900 text-black dark:text-white'>
            <div className='flex items-center gap-4 w-1/3'>
                <Link href='/' className='text-2xl font-bold flex items-center'>
                    <span className='mr-2'>ALI</span>
                    <span className='text-sm text-gray-600 dark:text-gray-400'>.dev</span>
                </Link>
            </div>

            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>

            <div className='lg:ml-16 hidden lg:flex'>
                <ThemeToggle />
            </div>

            <div className='hidden md:flex items-center gap-4 w-1/3 justify-end'>
                {socialLinks.map((socialLink, index) => (
                    <Link key={index} target='_blank' href={socialLink.url}>
                        {socialLink.icon ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Chat-3-Line--Streamline-Mingcute" height="28" width="28"><desc>Chat 3 Line Streamline Icon: https://streamlinehq.com</desc><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-0.011 0.002 -0.071 0.035 -0.02 0.004 -0.014 -0.004 -0.071 -0.035c-0.01 -0.004 -0.019 -0.001 -0.024 0.005l-0.004 0.01 -0.017 0.428 0.005 0.02 0.01 0.013 0.104 0.074 0.015 0.004 0.012 -0.004 0.104 -0.074 0.012 -0.016 0.004 -0.017 -0.017 -0.427c-0.002 -0.01 -0.009 -0.017 -0.017 -0.018Zm0.265 -0.113 -0.013 0.002 -0.185 0.093 -0.01 0.01 -0.003 0.011 0.018 0.43 0.005 0.012 0.008 0.007 0.201 0.093c0.012 0.004 0.023 0 0.029 -0.008l0.004 -0.014 -0.034 -0.614c-0.003 -0.012 -0.01 -0.02 -0.02 -0.022Zm-0.715 0.002a0.023 0.023 0 0 0 -0.027 0.006l-0.006 0.014 -0.034 0.614c0 0.012 0.007 0.02 0.017 0.024l0.015 -0.002 0.201 -0.093 0.01 -0.008 0.004 -0.011 0.017 -0.43 -0.003 -0.012 -0.01 -0.01 -0.184 -0.092Z" stroke-width="1"></path><path fill="#000000" d="M12 5c-4.597 0 -8 3.073 -8 6.5 0 2.014 1.141 3.872 3.042 5.096 0.738 0.476 0.939 1.403 0.972 2.222 0.753 -0.31 1.258 -1.16 2.172 -0.986 0.582 0.11 1.189 0.168 1.814 0.168 4.597 0 8 -3.073 8 -6.5S16.597 5 12 5ZM2 11.5C2 6.643 6.656 3 12 3s10 3.643 10 8.5S17.344 20 12 20c-0.653 0 -1.292 -0.053 -1.911 -0.155 -0.093 0.073 -0.253 0.205 -0.45 0.344C9.07 20.59 8.249 21 7 21a1 1 0 0 1 -1 -1c0 -0.55 0.143 -1.234 -0.094 -1.756C3.577 16.723 2 14.298 2 11.5Z" stroke-width="1"></path></g></svg>
                        ) : (
                            <Image src={socialLink.img} alt={socialLink.alt} width={24} height={24} />
                        )}
                    </Link>
                ))}
            </div>

            <div className='md:hidden'>
                <button className='w-10 h-8 flex flex-col justify-between z-20 relative' onClick={() => setMenuOpen(!menuOpen)}>
                    <motion.div variants={topVariants} animate={menuOpen ? "opened" : "closed"} className='w-10 h-1 bg-[#2C3E50] dark:bg-gray-300 rounded origin-left'></motion.div>
                    <motion.div variants={centerVariants} animate={menuOpen ? "opened" : "closed"} className='w-10 h-1 bg-[#2C3E50] dark:bg-gray-300 rounded origin-left'></motion.div>
                    <motion.div variants={bottomVariants} animate={menuOpen ? "opened" : "closed"} className='w-10 h-1 bg-[#2C3E50] dark:bg-gray-300 rounded origin-left'></motion.div>
                </button>

                {menuOpen && (
                    <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 bg-black dark:bg-gray-800 w-screen h-screen text-white dark:text-gray-300 flex items-center justify-center flex-col gap-8 text-4xl z-10'>
                        {links.map(link => (
                            <motion.div variants={listItemVariants} key={link.title}>
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                        <motion.div variants={listItemVariants}>
                            <ThemeToggle />
                        </motion.div>
                        <div className='flex gap-4'>
                            {socialLinks.map((socialLink, index) => (
                                <motion.div variants={listItemVariants} key={index}>
                                    <Link target='_blank' href={socialLink.url}>
                                        {socialLink.icon ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Chat-3-Line--Streamline-Mingcute" height="28" width="28"><desc>Chat 3 Line Streamline Icon: https://streamlinehq.com</desc><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-0.011 0.002 -0.071 0.035 -0.02 0.004 -0.014 -0.004 -0.071 -0.035c-0.01 -0.004 -0.019 -0.001 -0.024 0.005l-0.004 0.01 -0.017 0.428 0.005 0.02 0.01 0.013 0.104 0.074 0.015 0.004 0.012 -0.004 0.104 -0.074 0.012 -0.016 0.004 -0.017 -0.017 -0.427c-0.002 -0.01 -0.009 -0.017 -0.017 -0.018Zm0.265 -0.113 -0.013 0.002 -0.185 0.093 -0.01 0.01 -0.003 0.011 0.018 0.43 0.005 0.012 0.008 0.007 0.201 0.093c0.012 0.004 0.023 0 0.029 -0.008l0.004 -0.014 -0.034 -0.614c-0.003 -0.012 -0.01 -0.02 -0.02 -0.022Zm-0.715 0.002a0.023 0.023 0 0 0 -0.027 0.006l-0.006 0.014 -0.034 0.614c0 0.012 0.007 0.02 0.017 0.024l0.015 -0.002 0.201 -0.093 0.01 -0.008 0.004 -0.011 0.017 -0.43 -0.003 -0.012 -0.01 -0.01 -0.184 -0.092Z" stroke-width="1"></path><path fill="#000000" d="M12 5c-4.597 0 -8 3.073 -8 6.5 0 2.014 1.141 3.872 3.042 5.096 0.738 0.476 0.939 1.403 0.972 2.222 0.753 -0.31 1.258 -1.16 2.172 -0.986 0.582 0.11 1.189 0.168 1.814 0.168 4.597 0 8 -3.073 8 -6.5S16.597 5 12 5ZM2 11.5C2 6.643 6.656 3 12 3s10 3.643 10 8.5S17.344 20 12 20c-0.653 0 -1.292 -0.053 -1.911 -0.155 -0.093 0.073 -0.253 0.205 -0.45 0.344C9.07 20.59 8.249 21 7 21a1 1 0 0 1 -1 -1c0 -0.55 0.143 -1.234 -0.094 -1.756C3.577 16.723 2 14.298 2 11.5Z" stroke-width="1"></path></g></svg>
                                        ) : (
                                            <Image src={socialLink.img} alt={socialLink.alt} width={24} height={24} />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
