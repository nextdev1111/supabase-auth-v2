"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

type NavLinkProps = {
  title: string;
  href: string;
};

export const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <Link href={href}>
      <div
        className={`font-semibold px-2 py-1 color-white bg-indigo-300 rounded-md hover:bg-indigo-500 transition-all duration-150 hover:text-white`}
      >
        {title}
      </div>
    </Link>
  );
};

const Navbar = (props: Props) => {
  // links
  const links: NavLinkProps[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Auth",
      href: "/auth",
    },
  ];

  return (
    <nav className="px-4 py-2 bg-indigo-100 flex items-center justify-center">
      <div className="flex space-x-3">
        {/* nav links */}

        {links.map((link, index) => (
          <NavLink key={index} title={link.title} href={link.href} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
