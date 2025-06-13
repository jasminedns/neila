'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/globals.css";

type linksType = {
    href: string;
    name: string;
}

const DesktopNav = () => {
    const pathName = usePathname();

    const links: linksType[] = [
        { href: "/", name: "About the Game"},
        { href: "/about-the-team", name: "About the Team"},
        { href: "/project-info", name: "Project Info"}
    ]

    return (
        <nav className="hidden md:flex md:gap-4 md:justify-center">
            {links.map((item, index) => (
                <Link 
                    key={index}
                    href={item.href}
                    className={pathName === item.href ? " nav__link nav__link--active" : " nav__link nav__link:hover"}
                >{item.name}</Link>
            ))}
        </nav>
    )
}

export default DesktopNav;