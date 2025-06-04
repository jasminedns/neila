'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

    const pathName = usePathname();

    return (
        <nav>
            <Link href={"/"} className={pathName === "/" ? "border-2 bg-black text-white" : "bg-white"}>About the Game</Link>
            <Link href={"/about-the-team"} className={pathName === "/about-the-team" ? "border-2 bg-black text-white" : "bg-white"}>ABout the Team</Link>
            <Link href={"/project-info"} className={pathName === "/project-info" ? "border-2 bg-black text-white" : "bg-white"}>Project Info</Link>
        </nav>
    )
}

export default Header;