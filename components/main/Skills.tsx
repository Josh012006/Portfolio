"use client"

import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

import Carousel from "../Carousel";


import { Caveat } from "next/font/google";


const font = Caveat({ subsets: ["latin"], weight: '400' });



function Skills () {

    const hardSkills : string[] = [
        "devicon-html5-plain-wordmark colored",
        "devicon-css3-plain-wordmark colored",
        "devicon-javascript-plain colored",
        "devicon-typescript-plain colored",
        "devicon-cplusplus-plain colored",
        "devicon-c-plain colored",
        "devicon-mongodb-plain-wordmark colored",
        "devicon-express-original",
        "devicon-react-original-wordmark colored",
        "devicon-nodejs-plain-wordmark colored",
        "devicon-nextjs-original-wordmark",
        "devicon-redux-original colored",
        "devicon-mysql-plain-wordmark",
        "devicon-mongoose-original-wordmark colored",
        "devicon-nodemon-plain colored",
        "devicon-bootstrap-plain-wordmark",
        "devicon-tailwindcss-original colored",
        "devicon-git-plain-wordmark colored",
        "devicon-github-original-wordmark",
        "devicon-sass-original colored",
        "devicon-postman-plain colored",
        "devicon-azuresqldatabase-plain",
        "devicon-json-plain"

    ];

    const softSkills : string[] = [
        "Adaptability",
        "Communication",
        "Creativity",
        "Leadership",
        "ProblemSolving",
        "Teamwork",
        "Scrum",
        "TimeManagement"
    ];


    const [bgColor, setBgColor] = useState('bg-zinc-900');
    const [textColor, setTextColor] = useState('text-white');
    const [carouselColor, setCarouselColor] = useState('bg-zinc-800');

    const theme = useAppSelector((state) => state.theme).theme;

    useEffect(() => {
        const bgColor = (theme === "dark") ? 'bg-zinc-900' : 'bg-orange-50';
        const textColor = (theme === "dark") ? 'text-white' : 'text-black';
        const carouselColor = (theme === "dark") ? 'bg-zinc-800' : 'bg-orange-100';

        setCarouselColor(carouselColor);
        setTextColor(textColor);
        setBgColor(bgColor);
    }, [theme]);



    return (
        <section id="skills"  className={`${bgColor} ${textColor} py-4 min-h-125`}>
            <h1 className={`text-center text-3xl lg:text-4xl py-10 ${font.className}`}>My Skills</h1>
            <div className="py-3">
                <h2 className={`text-center lg:text-xl mt-2 mb-5 ${textColor}`}>Hard Skills</h2>
                <div className={`${carouselColor} w-full min-h-64`}>
                    <Carousel skills={hardSkills} type="hard" myInterval={3000} />
                </div>
            </div>
            <div className="py-3">
                <h2 className={`text-center lg:text-xl mt-2 mb-5 ${textColor}`}>Soft Skills</h2>
                <div className={`${carouselColor} w-full min-h-64`}>
                    <Carousel type="soft" skills={softSkills} myInterval={3200} />
                </div>
            </div>
        </section>
    )
}


export default Skills;