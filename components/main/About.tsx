"use client"

import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";


import { Caveat } from "next/font/google";
import Link from "next/link";

const font = Caveat({ subsets: ["latin"], weight: '400' });


const images = [
    'about0.webp',
    'about1.webp',
    'about2.webp',
    'about3.webp',
];



function About() {

    const theme = useAppSelector((state) => state.theme).theme;

    const [aboutSection, setAboutSection] = useState("bg-zinc-900 text-white");
    const [aboutDiv, setAboutDiv] = useState("bg-zinc-800");
    const [textDiv, setTextDiv] = useState("lg:shadow-custom");

    const [buttonColor, setButtonColor] = useState("bg-black");

    const [currentImage, setCurrentImage] = useState(0);
    const [animation, setAnimation] = useState("");


    useEffect(() => {
        const aboutSection = (theme === "dark") ? 'bg-zinc-900 text-white' : 'bg-orange-50 text-black';
        const aboutDiv = (theme === "dark") ? 'bg-zinc-800' : 'bg-orange-100';
        const textDiv = (theme === "dark") ? 'lg:shadow-custom' : 'lg:shadow-custom-1';
        const buttonColor = (theme === "dark") ? 'bg-black' : 'bg-orange-300';

        setButtonColor(buttonColor);
        setAboutSection(aboutSection);
        setAboutDiv(aboutDiv);
        setTextDiv(textDiv);
    }, [theme]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
            setAnimation('animate-fade-out');
            setTimeout(() => {
                setAnimation('');
            }, 2000);
        }, 5000);
    
        return () => clearInterval(interval);
    }, []);


    return(
        <section className={`min-h-125 py-8 flex justify-center items-center ${aboutSection} `} id="about">
            <div className={`grid grid-cols-1 lg:grid-cols-5 ${aboutDiv} rounded-lg min-h-96 w-11/12 lg:w-5/6`}>
                <div className={`col-span-1 lg:col-span-2 min-h-96 about-photo lg:min-h-125 bg-cover bg-no-repeat bg-center rounded-t-lg lg:!rounded-l-lg lg:rounded-t-0 relative ${textDiv} ${animation}`} style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('/${images[currentImage]}')`}}></div>
                <div className={`col-span-1 lg:col-span-3 text-sm lg:text-xl flex flex-col text-justify indent-6 justify-center py-5 px-5 lg:px-11`}>
                    <h1 className={`text-center text-3xl lg:text-4xl my-10 ${font.className}`}>About me</h1>
                    <p>
                        Hello again😁, I&apos;m Josué Mongan, a passionate and dedicated MERN full-stack web developer and
                        self-taught C++ enthusiast. Thanks God, my journey in programming began in high school. And ever
                        since, I have been driven by a relentless curiosity to delve deeper into the vast world
                        of computer science.
                    </p>
                    <br/>
                    <p >
                        With a solid foundation in the MERN stack—comprising MongoDB, Express.js, React, and Node.js—I
                        have developed a keen ability to build robust, scalable, and user-friendly web🌐 applications.
                        My expertise in C++ further complements my skill set, allowing me to tackle complex algorithms
                        and performance-critical applications with confidence and precision.
                    </p>
                    <br />
                    <p>
                        I thrive on challenges and am always eager to expand my knowledge, staying abreast of the latest
                        technological advancements💻 and industry best practices. My goal is to continue growing as a
                        developer, contributing to innovative projects, and making a meaningful impact through my work.
                    </p>
                    <br />
                    <p>
                        When I&apos;m not coding, you can find me immersing myself in a good book📚 or playing video games. I am also an avid jazz and gospel music lover and enjoy playing piano🎹 in my spare time.
                    </p>
                    <br />
                    <br />
                    <div className="flex flex-col items-center">
                        <Link href="/J_Mongan CV.pdf" target="_blank" className={`${buttonColor} text-center flex items-center justify-around rounded-md p-2`}><span>Download Resume</span><i className="fa-solid fa-download mx-2" aria-hidden="true"></i></Link>
                        <div className="grid grid-cols-2 justify-items-center mt-6">
                            <Link href="https://github.com/Josh012006" className="text-center" target="_blank"><i className="fa-brands fa-github" aria-hidden="true"></i></Link>
                            <Link href="https://www.linkedin.com/in/josu%C3%A9-mongan-a7b6242b8/" className="text-center" target="_blank"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;