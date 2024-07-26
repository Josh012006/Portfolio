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

    const [color, setColor] = useState("text-white");
    const [borderColor, setBorderColor] = useState("border-white");
    const [icon, setIcon] = useState("fa-moon");
    const [bg, setBg] = useState("black");
    const [hover, setHover] = useState("hover:border-b-2 hover:border-b-white");

    useEffect(() => {
        const bg = (theme === "dark") ? 'black' : '#ffedd5';
        const color = (theme === "dark") ? 'text-white' : 'text-black';
        const borderColor = (theme === "dark") ? 'border-white' : 'border-black';
        const icon = (theme === "dark") ? 'fa-moon' : 'fa-sun';

        const hover = (theme === "dark") ? 'hover:bg-zinc-900 lg:hover:border-b-2 lg:hover:border-b-white' : 'hover:bg-orange-200 lg:hover:border-b-2 lg:hover:border-b-black';

        setColor(color);
        setBorderColor(borderColor);
        setIcon(icon);
        setBg(bg);
        setHover(hover);
    }, [theme]);

    const [show, setShow] = useState(false);

    return (
        <header className={`min-h-12 ${color} lg:px-2 grid grid-cols-12 items-center border-b-2 border-b-zinc-900`} style={{background: bg}}>
            <Link href='/' className = {`${font.className} text-4xl font-bold col-span-12 text-center m-3 lg:col-span-4`}>JM</Link>
            <div className="grid grid-cols-2 col-span-12 lg:col-span-1 items-center">
                <span className="block lg:hidden" onClick = {() => {setShow(!show)}}><i className={`fa-bars fa-solid m-3 text-2xl rounded-md col-span-1 w-10 border-2 p-2 cursor-pointer ${color} ${borderColor}`} aria-hidden = "true"></i></span>
                <i className={`${icon} fa-solid absolute right-0 m-5 lg:relative text-2xl col-span-1 lg:col-span-2 w-10 p-2 cursor-pointer ${color}`} aria-hidden = "true" onClick = {() => {dispatch(changeTheme());}}></i>
            </div>
            <nav className={`col-span-12 lg:col-span-7 grid-cols-1 lg:grid lg:grid-cols-5 text-base lg:text-lg text-center items-center mt-3 mb-1 lg:mt-0 lg:mb-0 ${(show)? "grid" : "hidden"}`}>
                <Link href = "/#home" className={`p-2 lg:rounded-t-lg h-full lg:p-4 lg:m-0 ${hover}`}>Home</Link>
                <Link href = "/#about" className={`p-2 lg:rounded-t-lg h-full lg:p-4 lg:m-0 ${hover}`}>About me</Link>
                <Link href = "/#skills" className={`p-2 lg:rounded-t-lg h-full lg:p-4 lg:m-0 ${hover}`}>Skills</Link>
                <Link href = "/#projects" className={`p-2 lg:rounded-t-lg h-full lg:p-4 lg:m-0 ${hover}`}>Projects</Link>
                <Link href = "/#contact" className={`p-2 lg:rounded-t-lg h-full lg:p-4 lg:m-0 ${hover}`}>Contact</Link>
            </nav>
        </header>
    );
}


export default Header;
