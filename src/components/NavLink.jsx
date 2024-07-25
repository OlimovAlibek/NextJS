"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded  p-1 ${pathName === link.url && "bg-black dark:ring-white ring-1 text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;