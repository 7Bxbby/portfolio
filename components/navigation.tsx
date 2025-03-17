import React, {useEffect, useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation= () => {
    const pathname = usePathname();
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        if (pathname === "/about") setCurrent(0);
        else if (pathname.includes("/projects")) setCurrent(1);
        else if (pathname === "/contact") setCurrent(2);
        else setCurrent(0); // lub inna wartość dla nieznanych ścieżek
    }, [pathname]);
    return (
        <div className="xl:h-screen xl:w-fit w-full fixed xl:flex items-center z-[150]">
            <div
                className={`xl:block hidden ml-10 absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 transform -translate-y-[7rem]`}
                style={{
                    transform: `translateY(${current * 7}rem)`, // Moves based on section
                }}
            ></div>

            <div className="xl:bg-transparent justify-center bg-black xl:ml-12 flex items-center xl:border-b-0 xl:border-l-1 border-b-1 border-l-gray-500">
                <ul className="flex xl:flex-col xl:gap-12 text-lg text-gray-500">
                    <Link href={"/about"}>
                        <li className={`p-4 text-2xl cursor-pointer ${current === 0 ? "active" : "inactive"} ${current === 0 ? 'text-white' : 'hover:text-gray-400'}`}>Home
                        </li>
                    </Link>
                    <Link href={"/projects"}>
                    <li className={`p-4 text-2xl cursor-pointer ${current === 1 ? "active" : "inactive"} ${current === 1 ? 'text-white' : 'hover:text-gray-400'}`}>Projects
                    </li>
                    </Link>
                    <Link href={"/contact"}>
                    <li className={`p-4 text-2xl cursor-pointer ${current === 2 ? "active" : "inactive"} ${current === 2 ? 'text-white' : 'hover:text-gray-400'}`}>Contact
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default Navigation;