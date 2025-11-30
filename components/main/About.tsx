"use client"

import useSeasonBg from "@/hooks/useSeasonBg";
import { Caveat } from "next/font/google";
import Link from "next/link";

const font = Caveat({ subsets: ["latin"], weight: '400' });



function About() {

    const bg = useSeasonBg();


    return(
        <section className={`min-h-125 py-8 flex justify-center items-center bg-orange-50 text-black dark:bg-zinc-900 ${bg} dark:text-white `} id="about">
            <div className={`grid grid-cols-1 lg:grid-cols-5 bg-orange-100 dark:bg-zinc-800 rounded-lg min-h-96 w-11/12 lg:w-5/6`}>
                <div className={`col-span-1 lg:col-span-2 min-h-96 bg-cover lg:bg-[length:135%] lg:bg-[-120px_center] lg:min-h-125 bg-no-repeat bg-center rounded-t-lg lg:!rounded-l-lg lg:rounded-t-0 relative lg:shadow-custom-light dark:lg:shadow-custom-dark`} style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('/profile_picture.jpg')`}}></div>
                <div className={`col-span-1 lg:col-span-3 text-sm lg:text-xl flex flex-col text-justify indent-6 justify-center py-5 px-5 lg:px-11`}>
                    <h1 className={`text-center text-3xl lg:text-4xl my-10 ${font.className}`}>About me</h1>
                    <p>
                        I&apos;m a software developer passionate about engineering and automation. Thanks God, 
                        my journey in programming began in high school. And ever since, I have been driven by a relentless 
                        curiosity to delve deeper into the vast world of computer science.
                    </p>
                    <br/>
                    <p >
                        I have a wide range of skills, from problem-solving to algorithmic thinking and advanced programming, 
                        enabling me to design efficient solutions.
                        With a solid foundation in the MERN stack—comprising MongoDB, Express.js, React, and Node.js—I
                        have developed a keen ability to build robust, scalable, and user-friendly web applications.
                        My expertise in C++ and Java further complements my skill set, allowing me to tackle complex algorithms
                        and performance-critical applications with confidence and precision.
                    </p>
                    <br />
                    <p>
                        I thrive on challenges and am always eager to expand my knowledge, staying abreast of the latest
                        technological advancements and industry best practices. My goal is to continue growing as a
                        developer, contributing to innovative projects, and making a meaningful impact through my work.
                    </p>
                    <br />
                    <p>
                        When I&apos;m not coding, you can find me immersing myself in a good book or playing video games. 
                        I&apos;m a christian always trying to introduce 👑 Jesus&apos;s peace and love everywhere I go. 
                        I am also an avid jazz and gospel music lover and enjoy playing piano🎹 in my spare time.
                    </p>
                    <br />
                    <br />
                    <div className="flex items-center">
                        <Link href="/J_Mongan CV.pdf" target="_blank" className={`bg-orange-300 dark:bg-black text-center flex items-center justify-around rounded-md p-2`}><span className="flex flex-col items-center justify-center"><span>Download Resume</span><span>(Not up to date)</span></span><i className="fa-solid fa-download mx-2" aria-hidden="true"></i></Link>
                        <div className="grid grid-cols-2 justify-items-center">
                            <Link href="https://github.com/Josh012006" className="text-center" target="_blank"><i className="select-none fa-brands fa-github" aria-hidden="true"></i></Link>
                            <Link href="https://www.linkedin.com/in/josu%C3%A9-mongan-a7b6242b8/" className="text-center" target="_blank"><i className="select-none fa-brands fa-linkedin" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;