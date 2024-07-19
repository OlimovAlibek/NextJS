"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { motion } from 'framer-motion';

const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' }
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
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            <div className='flex items-center gap-4 w-1/3'>
                <Link href='/' className='text-2xl font-bold flex items-center'>
                    <span className='mr-2'>ALI</span>
                    <span className='text-sm text-gray-600'>.dev</span>
                </Link>
            </div>

            <div className='hidden md:flex gap-4 w-1/3'>
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>

            <div className='hidden md:flex items-center gap-4 w-1/3 justify-end'>
                <Link href="https://github.com/OlimovAlibek">
                    <Image src="/github.png" alt='github' width={24} height={24} />
                </Link>
                <Link href="https://linkedin.com/in/OlimovAlibek">
                    <Image src="/linkedin.png" alt='linkedin' width={24} height={24} />
                </Link>
                <Link href="https://t.me/Olimov_Alibek">
                    <Image src="/telegram.png" alt='telegram' width={24} height={24} />
                </Link>
                <Link href="https://instagram.com/Olimov__Alibek">
                    <Image src="/instagram.png" alt='instagram' width={24} height={24} />
                </Link>
                <Link href="/">
                    <Image src="/pinterest.png" alt='pinterest' width={24} height={24} />
                </Link>
            </div>

            <div className='md:hidden'>
                <button className='w-10 h-8 flex flex-col justify-between z-20 relative' onClick={() => setMenuOpen(!menuOpen)}>
                    <motion.div variants={topVariants} animate={menuOpen ? "opened" : "closed"} className='w-10 h-1 bg-blue-400 rounded origin-left'></motion.div>
                    <motion.div variants={centerVariants} animate={menuOpen ? "opened" : "closed"} className='w-10 h-1 bg-blue-400 rounded origin-left'></motion.div>
                    <motion.div variants={bottomVariants} animate={menuOpen ? "opened" : "closed"} className='w-10 h-1 bg-blue-400 rounded origin-left'></motion.div>
                </button>

                {menuOpen && (
                    <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 bg-black w-screen h-screen text-white flex items-center justify-center flex-col gap-8 text-4xl z-10'>
                        {links.map(link => (
                            <motion.div variants={listItemVariants} key={link.title}>
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
