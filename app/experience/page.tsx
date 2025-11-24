"use client"


import Career from "@/components/Career";
import { getSeason } from "@/utils/generalBg";
import Link from "next/link";
import { useState, useEffect } from "react";

function ExperiencePage() {

    const [bg, setBg] = useState<string>("bg-section-light-autumn dark:bg-section-dark-autumn");
    
    useEffect(() => {
        const season = getSeason();

        setBg(`bg-section-light-${season} dark:bg-section-dark-${season}`);
    }, []);


    return(
        <section id="experience" className={`bg-orange-50 dark:bg-zinc-900 ${bg} text-black dark:text-white p-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">My Experience</h1>
            <p className="text-center my-2 text-sm lg:text-lg">I had the opportunity to learn and to work with many interesting companies since I started diving into computer science and web development.</p>
            <div className="p-0 lg:p-5">
                <Career title="Technical assistant in technology development" logo="fas.png" period="01 January 2025 - ongoing (about a year)" companyInfos="Digital Teaching and Learning Strategies Team - University of Montreal" site="https://fas.umontreal.ca/faculte/direction-et-gouvernance/vice-decanat-etudes-de-cycles-superieurs-et-engagement-communautaire/#c71957" mail="viet-cuong.pham@umontreal.ca">
                    I work on various projects, mostly front-end, where I focus primarily on building components and adding new features with Vue.js. One of the projects, for example, involves developing a platform that allows teachers to create university courses. In this case, the components integrated into 
                    the web application are reused by course designers, allowing them to assemble and structure their content efficiently. Another project is an application that helps students build resilience to face the challenges they encounter during their studies. The team&apos;s working strategy is the Scrum Agile strategy.
                </Career>
                <Career title="Internship in fullstack development at Prodigy InfoTech" logo="prodigyinfotech.png" period="01 August 2024 - 31 August 2024 (1 month)" companyInfos="Prodigy InfoTech(Mumbai - 400018, Maharashta, India)" site="https://prodigyinfotech.dev/" mail="contact@prodigyinfotech.dev">
                    I did a one month internship at Prodigy InfoTech as a remote fullstack web developer. My tasks included the development of: i. a user authentication system with secure login and registration functionality, ii. an employee management system, specifically a web application that allows 
                    administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records, iii. a real-time chat application using WebSocket technology to enable instant messaging between users, and iv. a social media platform. I learned a lot and had the opportunity to experiment 
                    more with WebSockets and JWT. All my projects are displayed on my linkedin as posts so you can go and check it.
                    <br />
                    As a reward for my outstanding performances, I received a <Link className="text-blue-700 dark:text-blue-400 underline" target="_blank" href="/career/Certificate_of_Completion-Prodigy_InfoTech.pdf">certificate of completion</Link> and a <Link className="text-blue-700 dark:text-blue-400 underline" target="_blank" href="/career/Letter_of_Recommendation-Prodigy_InfoTech.pdf">letter of recommendation</Link> from the company.
                </Career>
            </div>
        </section>
    )
}




export default ExperiencePage;