"use client"


import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

import Project from "../Project";


import { Caveat } from "next/font/google";
import Link from "next/link";


const font = Caveat({ subsets: ["latin"], weight: '400' });


const projects = [
    'Tech Company Website',
    'C++ Task Manager',
    'Social Media Website',
    'Coffee Shop Website',
    'Health Appointment',
    'MaVille'
];




function Projects() {

    // * Managing the theme changes
    const [bgColor, setBgColor] = useState('bg-zinc-900');
    const [textColor, setTextColor] = useState('text-white');
    const [borderColor, setBorderColor] = useState('border-white');
    const [buttonColor, setButtonColor] = useState("bg-black");

    const theme = useAppSelector((state) => state.theme).theme;


    useEffect(() => {
        const bgColor = (theme === "dark") ? 'bg-zinc-900 section-dark' : 'bg-orange-50 section-light';
        const textColor = (theme === "dark") ? 'text-white' : 'text-black';
        const borderColor = (theme === "dark") ? 'border-white' : 'border-black';
        const buttonColor = (theme === "dark") ? 'bg-black' : 'bg-orange-300';

        setTextColor(textColor);
        setBgColor(bgColor);
        setBorderColor(borderColor);
        setButtonColor(buttonColor);
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
                <div className={`min-h-125 rounded-lg m-3 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/g${selectedProject}.webp')`}}>
                    <h2 className={`text-center text-sm text-white italic`}>{projects[selectedProject]}</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center my-28">
                        {projects && projects.map((_, index) => {
                            return <div key={index} className={`flex justify-center items-center lg:flex-col transform smooth-translate ${(selectedProject === index)? "-translate-x-10 lg:-translate-y-14 lg:-translate-x-0" : ""}`}>
                                <Link href={`/#ming${index}`} className="m-1 rounded-sm w-28 h-4 lg:w-4 lg:h-40 bg-cover bg-no-repeat bg-center cursor-pointer" style={{backgroundImage: `url('/projects/ming${index}.webp')`}} onMouseEnter={() => {setSelectedProject(index)}}></Link>
                                <span className={`border-white border rounded-full w-2 h-2 ${(selectedProject === index)? "block" : "hidden"}`}></span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <br />
            <p className="p-4 text-center text-sm lg:text-xl">
                I&apos;ve completed a number of interesting projects to display my skills. I will show an 
                overview here but they can be further seen on my github page. Some of the projects are online, 
                so go check the github and leave a star💫 if possible!
            </p>
            <div className="p-0 lg:p-5">
                <Project id="ming0" title="Tech Company Website" src="/projects/videos/express.mp4" github="https://github.com/Josh012006/Express" poster="/projects/g0.webp" demo="https://techmasters-delta.vercel.app/">
                    Modest website for selling products coded mainly using Express and Handlebars. It&apos;s really simple 😄.
                    <br />
                    <br />
                    This project really helped me using express to handle routes. Through it I&apos;ve also discovered the usage
                    of the view engine Handlebars. I&apos;ve used a middleware to make the site only available between 9 AM and 5 PM.
                    <br />
                    <br />
                    Through this project I&apos;ve learned how to use Express to handle routes and how to use Handlebars to display
                    the data. It really gave me a good understanding of routes definition and middlewares. I&apos;m also really proud of
                    the design of the website.
                </Project>
                <div className={`border-2 rounded-lg ${borderColor} mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming1" title="C++ Task Manager" src="/projects/videos/cpp.mp4" github="https://github.com/Josh012006/Tasks-Manager" poster="/projects/g1.webp">
                    Simple tasks manager wrote in C++. I haven&apos;t done the GUI yet so it runs in the terminal.
                    But I plan to do it with Qt.
                    <br />
                    <br />
                    I implemented a task manager that can help you keep your tasks, delete some and even see
                    the saved tasks. The tasks are saved in a file so that they don&apos;t disappear after the user
                    closes the program.
                    It is fully implemented in C++. I made it so that the code is really easy to understand for
                    someone with some knowledge of C++ and STL. For the time being it only works in the Terminal.
                    But there will be an app version done with Qt in the near future.
                </Project>
                <div className={`border-2 rounded-lg ${borderColor} mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming2" title="Social Media Website" src="/projects/videos/social-media.mp4" github="https://github.com/Josh012006/PRODIGY_FS_05" poster="/projects/g2.webp">
                    A complete social media platform where users can post content and view others&apos; posts. It&apos;s built with Next.js, TypeScript, TailwindCSS for the style and Mongoose(MongoDB) for the database.
                    <br />
                    <br />
                    This web app uses complex interactions between user, post and comment models in other to display the user&apos;s data and the posts. Like any other social media app, it has a home page where you can see 
                    other people posts, a creation page to add your own, a search page to find your friends and their posts on the app and finally a profile page to manage your account.
                    <br />
                    <br />
                    The project really helped me dive deeper into state management in React and in Next.js. I&apos;ve also had the opportunity to deal with complex models and data structures,
                    using referencing and embedding in MongoDB. I&apos;m really proud of the result and I think it&apos;s a really good project to show my skills in web development.
                </Project>
                <div className={`border-2 rounded-lg ${borderColor} mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming3" title="Coffee Shop Website" src="/projects/videos/coffee.mp4" github="https://github.com/Josh012006/challenge1" poster="/projects/g3.webp" demo="https://coffee-shop-five-kappa.vercel.app/">
                    Le Café du Coin is a demonstration website for a café, built with React via create-react-app. This project showcases the key features of a modern showcase 
                    site, offering an intuitive, responsive user interface.
                    <br />
                    <br />
                    The used technologies are React and TailwindCSS. This project demonstrates my ability to create modern, attractive web applications, essential for any commercial 
                    or showcase site development.
                </Project>
                <div className={`border-2 rounded-lg ${borderColor} mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming4" title="Health Appointment" src="/projects/videos/appointment.mp4" github="https://github.com/Josh012006/Appointment-App" poster="/projects/g4.webp" demo="https://health-appointment.vercel.app/">
                    An appointment app made with Next.js and TailwindCSS. It&apos;s the greatest project I&apos;ve worked on till now.
                    <br />
                    <br />
                    This web app is fully made with Next.js. I&apos;ve used Mongoose to connect to my MongoDB database and to define appointments and users&apos; schemas.
                    I&apos;ve used TailwindCSS for the style. On the app, as a patient you can requests appointments and keep track of the responses. As a secretary, you can see the requests and give an answer that is an appointment.
                    The doctor just has to see the appointments and the patients&apos; informations.
                    <br />
                    <br />
                    The part where I struggled the most is the management of the security and the restrictions on the app. It was really challenging to imagine all the cases and the possibilities to try to avoid disorder and attacks.
                </Project>
                <div className={`border-2 rounded-lg ${borderColor} mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming5" title="MaVille" src="/projects/videos/maville.mp4" github="https://github.com/Josh012006/IFT2255-ma-ville-bugbusters" poster="/projects/g5.webp" demo="https://ift-2255-ma-ville-bugbusters.vercel.app/">
                    An app MaVille to help the city of Montreal manage the public works more efficiently. It uses Java for the backend with a Javalin Server, React for the frontend and Morphia (MongoDB) for the database management. The app is also made to be responsive.
                    <br />
                    <br />
                    This project was realised with a group of friends in the context of our software engineering course. Like previously said, it is an app to help residents, building firms and the STPM (management service for public works in Montreal) communicate well. 
                    The resident declares a problem and provides the necessary informations such as the place and a description. Once the declaration is validated by an STPM agent, the providers can then apply to solve it and provide a budget for their project. The agent the confirms the project and
                    a notification is sent to all the residents that can be impacted by the new project.
                    Moreover, the app provides real-time updates regarding the ongoing project to help Montreal city&apos;s residents be better prepared.
                    <br />
                    <br />
                    It was my first time building a backend in Java and also using Morphia, so at first it was a bit of a challenge. But it ended in a beautiful experience. It helped us follow the formal steps involved in building a software, going from the UML diagrams to the implementation of the code, without forgetting the tests with JUnit. It also helped me practice the layered architecture one more time while introducing me to peer-to-peer architecture.
                </Project>
            </div>
            <p className="p-4 flex flex-col items-center justify-center gap-3 text-center text-sm lg:text-xl">
                Those are only a part of my projects. You can see more here.
                <Link target="_blank" href='/projects' className={`${buttonColor} text-center flex items-center justify-around rounded-md p-4`}>Other projects</Link>
            </p>
        </section>
    )
}



export default Projects;