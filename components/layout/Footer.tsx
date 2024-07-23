"use client"

import { Zeyada } from "next/font/google";
import { useAppSelector } from "@/redux/store";
import { useState, useEffect } from "react";


const font = Zeyada({ subsets: ["latin"], weight: '400' });


function Footer() {

    const theme = useAppSelector((state) => state.theme).theme;

    const [color, setColor] = useState("white");
    const [bg, setBg] = useState("black");


    useEffect(() => {
        const bg = (theme === "dark") ? 'black' : '#ffedd5';
        const color = (theme === "dark") ? 'white' : 'black';

        setColor(color);
        setBg(bg);
    }, [theme]);


    return(
        <footer className={`flex justify-between items-center min-h-16 px-3 lg:px-14 ${font.className} text-${color} border-t-2 border-t-zinc-950`} style ={{background: bg}}>
            <span className="text-xl">Happy you made it to the end!</span>
            <span className="text-2xl pr-2 lg:pr-16">Josué Mongan</span>
        </footer>
    )
}

export default Footer;