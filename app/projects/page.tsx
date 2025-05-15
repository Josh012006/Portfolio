"use client"

import Project from "@/components/Project";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";





function ProjectsPage() {

    const [bgColor, setBgColor] = useState('bg-zinc-900');
    const [textColor, setTextColor] = useState('text-white');
    const [borderColor, setBorderColor] = useState('border-white');


    const theme = useAppSelector((state) => state.theme).theme;


    useEffect(() => {
        const bgColor = (theme === "dark") ? 'bg-zinc-900 section-dark' : 'bg-orange-50 section-light';
        const textColor = (theme === "dark") ? 'text-white' : 'text-black';
        const borderColor = (theme === "dark") ? 'border-white' : 'border-black';

        setTextColor(textColor);
        setBgColor(bgColor);
        setBorderColor(borderColor);
    }, [theme]);



    return (
        <section className={`${bgColor} ${textColor} p-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">Other Projects</h1>
            <p className="text-center my-2">Apart from my main projects presented on my home page, here are some of my other projects.</p>
            <div className="my-3">
                <Project id="ming6" title="Simple online store for games" src="/projects/videos/oop.mp4" github="https://github.com/Josh012006/OOP" poster="/projects/g6.webp">
                    This is a very primitive e commerce website. It is done using the basic languages like HTML, CSS and JS(with the DOM).
                    <br/>
                    <br/>
                    I particularly like this project because it helped me understand and dive deeper into the concept of Object Oriented Programming in JavaScript. I created classes for the products, the cart and the cart items. I also used the local storage to save the cart. The website is responsive and the user can add products to the cart, remove them, see the total price and even buy them. 
                    Even though it is not complex, it displays that I have good foundations in web development.
                </Project>
                <div className={`border-2 rounded-lg ${borderColor} mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming7" title="Employee management system" src="/projects/videos/employee.mp4" github="https://github.com/Josh012006/PRODIGY_FS_02" poster="/projects/g7.webp">
                    This is a secure employee management system done using Next.js, Typescript and MongoDB. For the style I used TailwindCSS.
                    <br/>
                    <br/>
                    First the admin or the user must be already registered in the database with it&apos;s email and password. When he successfully connects, he has access to an interface where he can see the list of employees, add a new employee with their info, modify an employee&apos;s info or even delete the ones that are no longer needed.
                    The interface is user-friendly and also responsive(it works also well on small screens). The security of the app is tight as the credentials are deleted every three hours after any login to the app.
                    <br />
                    <br/>
                    This project helps display my understanding of MVC organization and my ability to use Next.js to build beautiful and fast working web applications.
                </Project>
                <div className={`border-2 rounded-lg ${borderColor} mx-auto w-1/6 my-3 h-0`}></div>
                <Project id="ming8" title="Real time chat application" src="/projects/videos/echo.mp4" github="https://github.com/Josh012006/PRODIGY_FS_04" poster="/projects/g8.webp">
                    A real time chat application done using the WebSockets and Next.js. I&apos;ve called it Echo.
                    <br/>
                    <br/>
                    The users have conversations and groups. They also have a profile to manage their information.
                    So how it works! Their are user, conversation, group and message models. The user can search a friend already on the app with its mail. Their conversation is then added and they can receive messages from each other using the websocket. The messages can be text, images or even videos. The messages are also saved so that the users can access the chat history.
                    Groups can also be created with more than 2 users if needed! It enable communication between much more users on the same subject.
                    <br />
                    <br/>
                    Through this project, I had the opportunity to experiment with websockets and to understand how they work to allow real time interactions.   
                </Project>
            </div>
        </section>
    );
}



export default ProjectsPage;