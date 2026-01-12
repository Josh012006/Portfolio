"use client"

import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

import Project from "../Project";


import { Caveat } from "next/font/google";
import Link from "next/link";
import useSeasonBg from "@/hooks/useSeasonBg";


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

    const [selectedProject, setSelectedProject] = useState(0);
    const [resetKey, setResetKey] = useState(0);

    const theme = useAppSelector((state) => state.theme).theme;


    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedProject(selected => ((selected + 1) % projects.length));
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [resetKey]);

    const bg = useSeasonBg();



    return (
        <section id="projects" className={`bg-orange-50 dark:bg-zinc-900 ${bg} text-black dark:text-white p-4 min-h-125 flex flex-col items-center`}>
            <h1 className={`text-center text-3xl lg:text-4xl py-10 ${font.className}`}>Projects</h1>
            <div className={`min-h-125 my-16 mx-5 w-full lg:w-4/6 rounded-lg border-2 border-black dark:border-white relative bg-transparent`}>
                <div className={`min-h-125 rounded-lg m-3 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat font-bold`} style={{backgroundImage: `${(theme === 'dark')? 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))' : 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))'}, url('/projects/g${selectedProject}.webp')`}}>
                    <h2 className={`text-center text-sm text-black dark:text-white italic`}>{projects[selectedProject]}</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center my-28">
                        {projects && projects.map((_, index) => {
                            return <div key={index} className={`flex justify-center items-center lg:flex-col transform smooth-translate ${(selectedProject === index)? "-translate-x-10 lg:-translate-y-14 lg:-translate-x-0" : ""}`}>
                                <Link href={`/#ming${index}`} className="m-1 rounded-sm w-28 h-4 lg:w-4 lg:h-40 bg-cover bg-no-repeat bg-center cursor-pointer" style={{backgroundImage: `url('/projects/ming${index}.webp')`}} onMouseEnter={() => {setSelectedProject(index), setResetKey(k => k + 1)}}></Link>
                                <span className={`border-white border rounded-full w-2 h-2 ${(selectedProject === index)? "block" : "hidden"}`}></span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <br />
            <p className="p-4 text-center text-sm lg:text-xl">
                I&apos;ve completed a number of interesting projects to deepen my skills. I display five of my most complete here but you can see more of them
                by going on my github page or by clicking on the link below. 
            </p>
            <p className="p-4 flex items-center justify-center text-center text-sm lg:text-xl">
                <Link target="_blank" href='/projects' className={`bg-orange-300 dark:bg-black text-center flex items-center justify-around rounded-md p-4 select-none`}>Other projects</Link>
            </p>
            <div className="p-0 lg:p-5">
                <Project id="ming0" title="C++ Task Manager" src="/projects/videos/cpp.mp4" github="https://github.com/Josh012006/Tasks-Manager" poster="/projects/g0.webp">
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
                <div className={`border-2 rounded-lg border-black dark:border-white mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming1" title="Social Media Website" src="/projects/videos/social-media.mp4" github="https://github.com/Josh012006/PRODIGY_FS_05" poster="/projects/g1.webp">
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
                <div className={`border-2 rounded-lg border-black dark:border-white mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming2" title="Coffee Shop Website" src="/projects/videos/coffee.mp4" github="https://github.com/Josh012006/challenge1" poster="/projects/g2.webp" demo="https://coffee-shop-five-kappa.vercel.app/">
                    Le Café du Coin is a demonstration website for a café, built with React via create-react-app. This project showcases the key features of a modern showcase 
                    site, offering an intuitive, responsive user interface. It was built as part of a group challenge with some of my peers.
                    <br />
                    <br />
                    The used technologies are React and TailwindCSS. This project demonstrates my ability to create modern, attractive web applications, essential for any commercial 
                    or showcase site development.
                </Project>
                <div className={`border-2 rounded-lg border-black dark:border-white mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming3" title="Health Appointment" src="/projects/videos/appointment.mp4" github="https://github.com/Josh012006/Appointment-App" poster="/projects/g3.webp"> {/* todo: Add a specific user for the tests demo="https://health-appointment.vercel.app/" */}
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
                <div className={`border-2 rounded-lg border-black dark:border-white mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming4" title="MaVille" src="/projects/videos/maville.mp4" github="https://github.com/Josh012006/IFT2255-ma-ville-bugbusters" poster="/projects/g4.webp" demo="https://ift-2255-ma-ville-bugbusters.vercel.app/">
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
                <div className={`border-2 rounded-lg border-black dark:border-white mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming5" title="NanoGoal-RL" src="/projects/videos/nanogoal-rl.mp4" github="https://github.com/Josh012006/NanoGoal-RL" poster="/projects/g5.webp">
                    This is a goal conditioned reinforcement learning project. It is made using Python, Gymnasium and Stable-baselines3.
                    <br />
                    <br />
                    First I used Gymnasium to configure my custom environment. It&apos;s a simulation of a blood vessel with walls, white blood cells and red blood cells. The target and the agent are placed randomly in the available space to navigate. 
                    The goal is for the agent to go to the target position. To define my model, I used the PPO algorithm from Stable-Baseline3 and realised 800 000 training episodes with the custom environment.
                    I then tested the trained agent over 300 episodes to see its performance. 
                    <br />
                    <br />
                    With the model I obtained, the agent is able to reduce the distance between it and the target. It is also able to make continuous movements and even to go 
                    around walls sometimes to achieve the goal. But the analysis also revealed that it takes too many useless decisions and that even though it can come very close to the target, most of the time it deviates and loses time going round in circles. 
                    <br />
                    <br />
                    I suspect that it is linked to the complexity and the diversity of the environments from one episode to another. It might also be due to the fact that the training is directly done with complex environments from the start. 
                    It would be better to increase the difficulty and transform the learning into a curriculum. Apart from that, it would also be interesting to explore a more realistic configuration of the environment and even transfer the simulation to a real robot.
                    Those are possible improvements I will be working on next.
                </Project>
            </div>
        </section>
    )
}



export default Projects;