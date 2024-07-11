"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { motion } from 'framer-motion';

const links = [
    {url: '/', title: 'Home'},
    {url:'/about', title: 'About'},
    {url:'/portfolio', title: 'Portfolio'},
    {url:'/contact', title: 'Contact'}
]

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const topVariants = {
        closed:{
            rotate:0
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)"
        }
    }

    const centerVariants = {
        closed:{
            rotate:1
        },
        opened:{
            opacity:0,
            backgroundColor:"rgb(255,255,255)"
        }
    }

    const bottomVariants = {
        closed:{
            rotate:0
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"
        }
    }

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x:0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x:0,
            opacity: 1
        }
    }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>

        <div className='hidden md:flex gap-4 w-1/3'>
            {links.map((link => (
                <NavLink link={link} key={link.title}/>
            )))}
        </div>
        

        <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
            <Link href='/' className='bg-black p-1 text-sm rounded-md font-semibold flex justify-center items-center'>
                <span className='text-white mr-1'>ALI</span>
                <span className='w-8 h-6 rounded bg-white text-black flex justify-center items-center'>.dev</span>
            </Link>
        </div>

        <div className='hidden md:flex items-center gap-4 w-1/3'>
            <Link href={"/"}>
                <Image src="/github.png" alt='github' width={24} height={24}/>
            </Link>
            <Link href={"/"}>
                <Image src="/facebook.png" alt='github' width={24} height={24}/>
            </Link>
            <Link href={"/"}>
                <Image src="/instagram.png" alt='github' width={24} height={24}/>
            </Link>
            <Link href={"/"}>
                <Image src="/linkedin.png" alt='github' width={24} height={24}/>
            </Link>
            <Link href={"/"}>
                <Image src="/pinterest.png" alt='github' width={24} height={24}/>
            </Link>

        </div>
        <div className='md:hidden'>
            <button className='w-10 h-8 flex flex-col justify-between z-20 relative' onClick={() => setMenuOpen(!menuOpen)}>
                <motion.div variants={topVariants} animate={menuOpen ? "opened" : "closed"} className='w-10 h-1 bg-blue-400 rounded origin-left'></motion.div>
                <motion.div variants={centerVariants} animate={menuOpen ? "opened" : "closed"} className='w-10 h-1 bg-blue-400 rounded origin-left'></motion.div>
                <motion.div variants={bottomVariants} animate={menuOpen ? "opened" : "closed"} className='w-10 h-1 bg-blue-400 rounded origin-left'></motion.div>
            </button>

            { menuOpen &&

                <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 bg-black w-screen h-screen text-white flex items-center justify-center flex-col gap-8 text-4xl z-10'>
                    {links.map((link => (
                        <motion.div variants={listItemVariants} key={link.title}>
                            <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                    )))}
                </motion.div>

            }       
        </div>
        
    </div>
  )
}

export default Navbar
