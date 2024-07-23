"use client"

import { useState, useEffect } from "react";

import { useAppSelector } from "@/redux/store";

import { Dancing_Script } from "next/font/google";

const font = Dancing_Script({ subsets: ["latin"], weight: '400' });



function Home() {

    const [bgColor, setBgColor] = useState("linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))");

    const theme = useAppSelector((state) => state.theme).theme;

    useEffect(() => {
        const bgColor = (theme === "dark") ? "linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))" : "linear-gradient(90deg, rgba(255, 165, 0, 0.3), rgba(165, 42, 42, 0.2))";

        setBgColor(bgColor);
    }, [theme]);




    return (
        <section id="home" className={`p-5 min-h-72 lg:min-h-125 relative overflow-hidden`} style={{backgroundImage: bgColor}}>
            <div className="p-3 text-white min-w-full absolute top-0 left-0 min-h-full flex flex-col text-center justify-center">
                <h1 className = "text-xl lg:text-3xl my-2">Hi, I&apos;m <span>Josué MONGAN</span></h1>
                <p className={`${font.className} text-3xl lg:text-4xl m-3`}>Welcome to the place where Imagination is turned into Reality.</p>
                <p className="whitespace-normal m-5 text-xl lg:text-2xl font-bold">Passionate MERN Developer | Self-taught C++ developer | AI enthusiast</p>
            </div>
            <video className="absolute top-0 left-0 min-w-full min-h-full -z-10" autoPlay muted loop>
                <source src="/home-animation.mp4" type="video/mp4" />
            </video>
        </section>
    )
}


export default Home;