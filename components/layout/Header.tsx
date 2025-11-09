"use client"

import Link from "next/link";
import { Zeyada } from "next/font/google";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { changeTheme } from "@/redux/features/themeSlice";


const font = Zeyada({ subsets: ["latin"], weight: '400' });

function Header() {

    const theme = useAppSelector((state) => state.theme).theme;
    
    const dispatch = useDispatch<AppDispatch>();

    const [show, setShow] = useState(false);

    const [icon, setIcon] = useState("fa-moon");

    useEffect(() => {
        const icon = (theme === "dark") ? 'fa-sun' : 'fa-moon';
        setIcon(icon);
    }, [theme]);

    return (
        <header className={`min-h-24 text-black dark:text-white lg:px-2 grid grid-cols-12 items-center border-b-2 border-b-zinc-900 lg:sticky lg:z-50 lg:top-0 bg-orange-100 dark:bg-black`}>
            <Link href='/' className = {`${font.className} text-4xl font-bold col-span-12 text-center m-3 lg:col-span-2`}>JM</Link>
            <div className="grid grid-cols-2 col-span-12 lg:col-span-1 items-center">
                <span className="block lg:hidden" onClick = {() => {setShow(!show)}}><i className={`fa-bars fa-solid m-3 text-2xl rounded-md col-span-1 w-10 p-2 cursor-pointer text-black dark:text-white`} aria-hidden = "true"></i></span>
                <i className={`${icon} fa-solid absolute right-0 m-5 lg:relative text-2xl col-span-1 lg:col-span-2 w-10 p-2 cursor-pointer text-black dark:text-white`} aria-hidden = "true" onClick = {() => {document.documentElement.classList.toggle('dark'); dispatch(changeTheme());}}></i>
            </div>
            <nav className={`col-span-12 lg:col-span-9 grid-cols-1 lg:grid lg:grid-cols-8 text-base lg:text-lg text-center items-center mt-3 mb-1 lg:mt-0 lg:mb-0 ${(show)? "grid" : "hidden"}`}>
                <Link href = "/#home" className={`p-2 flex items-center justify-center lg:rounded-t-lg h-full lg:p-4 lg:m-0 hover:bg-orange-200 lg:hover:border-b-2 lg:hover:border-b-black dark:hover:bg-zinc-900 dark:lg:hover:border-b-2 dark:lg:hover:border-b-white`}>Home</Link>
                <Link href = "/#about" className={`p-2 flex items-center justify-center lg:rounded-t-lg h-full lg:p-4 lg:m-0 hover:bg-orange-200 lg:hover:border-b-2 lg:hover:border-b-black dark:hover:bg-zinc-900 dark:lg:hover:border-b-2 dark:lg:hover:border-b-white`}>About me</Link>
                <Link href = "/#skills" className={`p-2 flex items-center justify-center lg:rounded-t-lg h-full lg:p-4 lg:m-0 hover:bg-orange-200 lg:hover:border-b-2 lg:hover:border-b-black dark:hover:bg-zinc-900 dark:lg:hover:border-b-2 dark:lg:hover:border-b-white`}>Skills</Link>
                <Link href = "/#projects" className={`p-2 flex items-center justify-center lg:rounded-t-lg h-full lg:p-4 lg:m-0 hover:bg-orange-200 lg:hover:border-b-2 lg:hover:border-b-black dark:hover:bg-zinc-900 dark:lg:hover:border-b-2 dark:lg:hover:border-b-white`}>Projects</Link>
                <Link href = "/education" className={`p-2 flex items-center justify-center lg:rounded-t-lg h-full lg:p-4 lg:m-0 hover:bg-orange-200 lg:hover:border-b-2 lg:hover:border-b-black dark:hover:bg-zinc-900 dark:lg:hover:border-b-2 dark:lg:hover:border-b-white`}>Education</Link>
                <Link href = "/experience" className={`p-2 flex items-center justify-center lg:rounded-t-lg h-full lg:p-4 lg:m-0 hover:bg-orange-200 lg:hover:border-b-2 lg:hover:border-b-black dark:hover:bg-zinc-900 dark:lg:hover:border-b-2 dark:lg:hover:border-b-white`}>Experience</Link>
                <Link href = "/research" className={`p-2 flex items-center justify-center lg:rounded-t-lg h-full lg:p-4 lg:m-0 hover:bg-orange-200 lg:hover:border-b-2 lg:hover:border-b-black dark:hover:bg-zinc-900 dark:lg:hover:border-b-2 dark:lg:hover:border-b-white`}>Research and Awards</Link>
                <Link href = "/#contact" className={`p-2 flex items-center justify-center lg:rounded-t-lg h-full lg:p-4 lg:m-0 hover:bg-orange-200 lg:hover:border-b-2 lg:hover:border-b-black dark:hover:bg-zinc-900 dark:lg:hover:border-b-2 dark:lg:hover:border-b-white`}>Contact</Link>
            </nav>
        </header>
    );
}


export default Header;
