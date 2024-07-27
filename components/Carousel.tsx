"use client"


import { useAppSelector } from '@/redux/store';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function Carousel ({ skills, type, myInterval = 3000 }: { skills:string[], type: string, myInterval?: number}) {


    const [buttons, setButtons] = useState('text-white bg-black');

    const theme = useAppSelector((state) => state.theme).theme;

    useEffect(() => {
        const buttons = (theme === "dark") ? 'text-white bg-black' : 'text-black bg-white';
        setButtons(buttons);
    }, [theme]);



    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, myInterval);

        return () => clearInterval(interval);
    }, [currentIndex]);


    return (
        <div className="carousel-container min-h-96 flex flex-col items-center justify-center">
            <div
                className="carousel-content"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {skills.map((skill, index) => (
                <div className="carousel-item min-w-full box-border flex flex-col items-center justify-center p-3 min-h-full" key={index}>
                    {type === "hard" && <i className={`${skill} text-center text-9xl my-auto py-3`} aria-hidden="true"></i>}
                    {type === "soft" && <div className='flex flex-col items-center justify-center'>
                        <Image alt={`${skill}`} src={`/skills/${skill.toLowerCase()}.webp`} className={`mx-auto my-auto py-3`} width={128} height={128} />
                        <h3 className='text-center text-base lg:text-2xl my-2'>{skill}</h3>
                    </div>}
                </div>
                ))}
            </div>
            <div className="carousel-buttons">
                <i className={`fa-solid fa-arrow-left cursor-pointer p-3 mx-2 rounded-full ${buttons}`} aria-hidden="true" onClick={handlePrev}></i>
                <i className={`fa-solid fa-arrow-right cursor-pointer p-3 mx-2 rounded-full ${buttons}`}aria-hidden="true" onClick={handlePrev}></i>
            </div>
        </div>
    );
};

export default Carousel;
