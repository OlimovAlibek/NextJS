"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({link}) => {

    const pathName = usePathname()

  return (
    <div className={`rounded p-1 ${pathName === link.url && 'bg-black text-white'}`}>
      <Link href={link.url}>{link.title}</Link>
    </div>
  )
}

export default NavLink
