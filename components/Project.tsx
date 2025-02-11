"use client"

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

import { useAppSelector } from "@/redux/store";





function Project({ children, title, src, poster, github, demo, id } : { children: ReactNode, title: string, src: string, poster: string, github: string, demo?: string, id: string }) {

    const [num, setNum] = useState(0);

    const theme = useAppSelector((state) => state.theme).theme;
    const [buttonColor, setButtonColor] = useState("bg-black");

    useEffect(() => {
        const myNum = Math.floor(Math.random() * 5);
        setNum(myNum);
    }, []);

    useEffect(() => {
        const buttonColor = (theme === "dark") ? 'bg-black' : 'bg-orange-300';

        setButtonColor(buttonColor);
    }, [theme]);



    return (
        <div className="min-h-96 lg:m-6 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center text-sm lg:text-lg" id={id}>
            {(num % 2 == 0) && <video className="rounded-lg m-5" preload="none" poster={poster} controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>}
            <div className="col-span-1 p-0 lg:p-5 m-2">
                <h1 className="text-center text-lg lg:text-xl font-bold my-2">{title}</h1>
                <div className="text-justify">
                    {children}
                </div>
                <br />
                <div className="flex flex-col lg:flex-row gap-5 items-center">
                    <Link target="_blank" href={github} className={`${buttonColor} text-center flex items-center justify-around rounded-md p-2`}>Source code</Link>
                    {demo && <Link target="_blank" href={demo} className={`${buttonColor} text-center flex items-center justify-around rounded-md p-2`}>Demo</Link>}
                </div>
            </div>
            {(num % 2 == 1) && <video className="rounded-lg m-5" preload="none" poster={poster} controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>}
        </div>
    )
}



export default Project;