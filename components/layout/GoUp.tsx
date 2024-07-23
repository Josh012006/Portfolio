"use client"

import { useAppSelector } from "@/redux/store";
import { useState, useEffect } from "react";


function GoUp() {

    const theme = useAppSelector((state) => state.theme).theme;

    const [bgColor, setBgColor] = useState("bg-white");
    const [iconColor, setIconColor] = useState("text-black");

    
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    useEffect(() => {
        const bgColor = (theme === "dark") ? 'bg-white' : 'bg-black';
        const iconColor = (theme === "dark") ? 'text-black' : 'text-white';

        setIconColor(iconColor);
        setBgColor(bgColor);
    }, [theme]);
    
    return (
        <div className="go-up fixed z-50 bottom-5 m-3 right-0 w-14">
            <div onClick={scrollToTop} className={`cursor-pointer w-12 h-12 rounded-3xl p-4 z-5 ${bgColor} flex items-center justify-center`}>
                <i className={`fa-solid fa-arrow-up ${iconColor}`} aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default GoUp;