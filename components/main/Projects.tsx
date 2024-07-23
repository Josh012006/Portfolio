"use client"


import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";



import { Caveat } from "next/font/google";


const font = Caveat({ subsets: ["latin"], weight: '400' });


const projects = [
    'Weather App',
    'Tech Company Website',
    'C++ Task Manager',
    'CMS Website',
    'Health Appointment',
];




function Projects() {


    const [bgColor, setBgColor] = useState('bg-zinc-900');
    const [textColor, setTextColor] = useState('text-white');
    const [borderColor, setBorderColor] = useState('border-white');

    const theme = useAppSelector((state) => state.theme).theme;


    useEffect(() => {
        const bgColor = (theme === "dark") ? 'bg-zinc-900' : 'bg-orange-50';
        const textColor = (theme === "dark") ? 'text-white' : 'text-black';
        const borderColor = (theme === "dark") ? 'border-white' : 'border-black';

        setTextColor(textColor);
        setBgColor(bgColor);
        setBorderColor(borderColor);
    }, [theme]);



    const [selectedProject, setSelectedProject] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedProject(selected => ((selected + 1) % projects.length));
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, []);



    return (
        <section id="projects" className={`${bgColor} ${textColor} p-4 min-h-125 flex flex-col items-center`}>
            <h1 className={`text-center text-3xl lg:text-4xl py-10 ${font.className}`}>Projects</h1>
            <div className={`min-h-125 my-16 mx-5 w-full lg:w-4/6 rounded-lg border-2 ${borderColor} relative bg-transparent`}>
                <div className={`min-h-125 rounded-lg m-3 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/g${selectedProject}.png')`}}>
                    <h2 className={`text-center text-sm text-white italic`}>{projects[selectedProject]}</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center my-28">
                        {projects && projects.map((project, index) => {
                            return <div key={index} className={`flex justify-center items-center lg:flex-col transform smooth-translate ${(selectedProject === index)? "-translate-x-10 lg:-translate-y-14 lg:-translate-x-0" : ""}`}>
                                <div className="m-1 rounded-sm w-40 h-4 lg:w-4 lg:h-40 bg-cover bg-no-repeat bg-center cursor-pointer" style={{backgroundImage: `url('/projects/ming${index}.png')`}} onMouseEnter={() => {setSelectedProject(index)}}></div>
                                <span className={`border-white border rounded-full w-2 h-2 ${(selectedProject === index)? "block" : "hidden"}`}></span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <br />
            <p className="p-4 text-center">
                I&apos;ve completed a number of small projects to display my skills. I will show an 
                overview here but they can be further seen on my github page.
            </p>
        </section>
    )
}



export default Projects;