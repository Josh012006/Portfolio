"use client"

import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

import Carousel from "../Carousel";


import { Caveat } from "next/font/google";


const font = Caveat({ subsets: ["latin"], weight: '400' });



function Skills () {

    const hardSkills : string[] = [
        "html5/html5-original-wordmark",
        "css3/css3-original-wordmark",
        "javascript/javascript-original",
        "typescript/typescript-original",
        "cplusplus/cplusplus-original",
        "c/c-original",
        "python/python-original",
        "nodejs/nodejs-original-wordmark",
        "nodemon/nodemon-original",
        "npm/npm-original-wordmark",
        "express/express-original",
        "react/react-original-wordmark",
        "reactrouter/reactrouter-original-wordmark",
        "vuejs/vuejs-original-wordmark",
        "nextjs/nextjs-original-wordmark",
        "nuxtjs/nuxtjs-original-wordmark",
        "redux/redux-original",
        "mysql/mysql-original-wordmark",
        "mongodb/mongodb-original-wordmark",
        "mongoose/mongoose-original-wordmark",
        "bootstrap/bootstrap-original-wordmark",
        "tailwindcss/tailwindcss-original",
        "vitejs/vitejs-original",
        "git/git-original-wordmark",
        "github/github-original-wordmark",
        "sass/sass-original",
        "postman/postman-original",
        "axios/axios-plain-wordmark",
        "jquery/jquery-original-wordmark",
        "materialui/materialui-original",
        "vercel/vercel-original-wordmark",
        "vscode/vscode-original-wordmark"
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
        const bgColor = (theme === "dark") ? 'bg-zinc-900 section-dark' : 'bg-orange-50 section-light';
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
                <h2 className={`text-center font-bold lg:text-xl mt-2 mb-5 ${textColor}`}>Hard Skills</h2>
                <div className={`${carouselColor} w-full min-h-64`}>
                    <Carousel skills={hardSkills} type="hard" myInterval={3000} />
                </div>
            </div>
            <div className="py-3">
                <h2 className={`text-center font-bold lg:text-xl mt-2 mb-5 ${textColor}`}>Soft Skills</h2>
                <div className={`${carouselColor} w-full min-h-64`}>
                    <Carousel type="soft" skills={softSkills} myInterval={3200} />
                </div>
            </div>
        </section>
    )
}


export default Skills;