"use client"


import Experience from "@/components/Experience";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { useEffect, useState } from "react";





function ExperiencePage() {

    // * Managing the theme changes
    const [bgColor, setBgColor] = useState('bg-zinc-900');
    const [textColor, setTextColor] = useState('text-white');

    const theme = useAppSelector((state) => state.theme).theme;


    useEffect(() => {
        const bgColor = (theme === "dark") ? 'bg-zinc-900' : 'bg-orange-50';
        const textColor = (theme === "dark") ? 'text-white' : 'text-black';

        setTextColor(textColor);
        setBgColor(bgColor);
    }, [theme]);


    return(
        <section id="experience" className={`${bgColor} ${textColor} p-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">My Experience</h1>
            <p className="text-center my-2">I&apos;ve had many experiences since I started programming and particularly web development.</p>
            <div className="p-0 lg:p-5">
                <Experience title="Software Development Bootcamp at GOMYCODE" logo="gomycode.jpeg" period="28 January 2024 - 13 July 2024 (6 months)" companyInfos="GomyCode Sénégal" site="https://gomycode.com/home-01/" mail="hello@gomycode.com">
                    I participated in a 6 months bootcamp at GOMYCODE SENEGAL. There I learned all there was to know about fullstack web development. We started with the basics like HTML, CSS (with Bootstrap, TailwindCSS and also SASS) and JavaScript (with the DOM and ES6). We then learned how to use Git and Github for Version Control. 
                    Then next step was to build a solid foundation in Algorithms. So we explored data structures, recursion, sorting and searching algorithms and worked mainly on our logic and our critical thinking. After that we dived into relational databases with SQL (DDL, DML, DQL and MySQL) and non-relational databases focusing mainly on MongoDB and Mongoose. 
                    We then learned how to build APIs with NodeJS, Express and RESTful APIs. We also learned how to use Postman to test our APIs. We then learned how to use ReactJS and TypeScript to build the frontend of our applications. We also learned how to use Redux and Redux Toolkit for state management. We then learned how to use NextJS to build server side 
                    rendered applications. We also learned how to use Agile methodologies to manage our projects. 
                    <br />
                    <br />
                    It was a truly enriching experience and I learned a lot. I also had the opportunity to work on a lot of projects and to collaborate with a lot of people. I also learned how to work in a team and how to manage my time and my tasks.
                    <br />
                    At the end of the bootcamp, I received a certification in fullstack web development for my dedication and to prove my knowledge.
                    You can check it <Link className="text-blue-700 underline" target="_blank" href="https://diploma.gomycode.app/?id=31722254428800479">here</Link>.
                </Experience>
                <Experience title="Internship in fullstack development at Prodigy InfoTech" logo="prodigyinfotech.png" period="01 August 2024 - 31 August 2024 (1 month)" companyInfos="Prodigy InfoTech(Mumbai - 400018, Maharashta, India)" site="https://prodigyinfotech.dev/" mail="contact@prodigyinfotech.dev">
                    I did a one month internship at Prodigy InfoTech as a remote fullstack web developer. My tasks included the development of: i. a user authentication system with secure login and registration functionality, ii. an employee management system, specifically a web application that allows 
                    administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records, iii. a real-time chat application using WebSocket technology to enable instant messaging between users, and iv. a social media platform. I learned a lot and had the opportunity to experiment 
                    more with WebSockets and JWT. All my projects are displayed on my linkedin as posts so you can go and check it.
                    <br />
                    As a reward for my outstanding performances, I received a <Link className="text-blue-700 underline" target="_blank" href="/experience/Certificate of Completion - Prodigy InfoTech.pdf">certificate of completion</Link> and a <Link className="text-blue-700 underline" target="_blank" href="/experience/Letter of Recommendation - Prodigy InfoTech.pdf">letter of recommendation</Link> from the company.
                </Experience>
            </div>
        </section>
    )
}




export default ExperiencePage;