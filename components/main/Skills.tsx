"use client"

import useSeasonBg from "@/hooks/useSeasonBg";
import Carousel from "../Carousel";
import Image from 'next/image';



import { Caveat } from "next/font/google";
import { useState } from "react";


const font = Caveat({ subsets: ["latin"], weight: '400' });



function Skills () {

    const hardSkills : string[] = [
        "html5/html5-original-wordmark",
        "css3/css3-original-wordmark",
        "javascript/javascript-original",
        "typescript/typescript-original",
        "cplusplus/cplusplus-original",
        "c/c-original",
        "java/java-original-wordmark",
        "haskell/haskell-original",
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
        "latex/latex-original",
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

    const bg = useSeasonBg();

    const [showHardSkills, setShowHardSkills] = useState<boolean>(false);
    const [showSoftSkills, setShowSoftSkills] = useState<boolean>(false);



    return (
        <section id="skills"  className={`bg-orange-50 dark:bg-zinc-900 ${bg} text-black dark:text-white py-4 min-h-125`}>
            <h1 className={`text-center text-3xl lg:text-4xl py-10 ${font.className}`}>My Skills</h1>
            <div className="py-3">
                <h2 className={`text-center font-bold lg:text-xl mt-2 mb-5 text-black dark:text-white`}>Hard Skills</h2>
                <div className={`bg-orange-100 dark:bg-zinc-800 w-full min-h-64`}>
                    <Carousel skills={hardSkills} type="hard" myInterval={3000} />
                    <div className="text-center">
                        <i className={`select-none fa-solid ${showHardSkills? 'fa-chevron-up' : 'fa-chevron-down'} cursor-pointer p-3 mx-2 text-black dark:text-white`} aria-hidden="true" onClick={() => {setShowHardSkills(val => !val)}}></i>
                    </div>
                    <div 
                        className={`
                            grid grid-cols-4 lg:grid-cols-11
                            items-center justify-items-center gap-2
                            transition-all duration-500 ease-in-out
                            ${showHardSkills 
                                ? "opacity-100 scale-100 max-h-[2000px]" 
                                : "opacity-0 scale-95 max-h-0 overflow-hidden"
                            }
                        `}
                    >
                        { hardSkills.map((skill) => {
                            return <Image key={skill} alt={`${skill}`} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@${(skill === "c/c-original")? "v2.16.0" : "latest"}/icons/${skill}.svg`} className={`mx-auto my-auto py-3`} width={50} height={50} />
                        })}
                    </div>
                </div>
            </div>
            <div className="py-3">
                <h2 className={`text-center font-bold lg:text-xl mt-2 mb-5 text-black dark:text-white`}>Soft Skills</h2>
                <div className={`bg-orange-100 dark:bg-zinc-800 w-full min-h-64`}>
                    <Carousel type="soft" skills={softSkills} myInterval={3200} />
                    <div className="text-center">
                        <i className={`select-none fa-solid ${showSoftSkills? 'fa-chevron-up' : 'fa-chevron-down'} cursor-pointer p-3 mx-2 text-black dark:text-white`} aria-hidden="true" onClick={() => {setShowSoftSkills(val => !val)}}></i>
                    </div>
                    <div 
                        className={`
                            grid grid-cols-3 lg:grid-cols-11
                            items-center justify-items-center gap-2
                            transition-all duration-500 ease-in-out
                            ${showSoftSkills 
                                ? "opacity-100 scale-100 max-h-[2000px]" 
                                : "opacity-0 scale-95 max-h-0 overflow-hidden"
                            }
                        `}
                    >
                        { softSkills.map((skill) => {
                            return <div key={skill} className='flex flex-col items-center justify-center '>
                                <Image alt={`${skill}`} src={`/skills/${skill.toLowerCase()}.webp`} className={`mx-auto my-auto py-3`} width={50} height={50} />
                                <h3 className='text-center text-base my-2'>{skill}</h3>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Skills;