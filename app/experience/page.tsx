"use client"


import Career from "@/components/Career";
import Link from "next/link";

function ExperiencePage() {


    return(
        <section id="experience" className={`bg-orange-50 bg-section-light dark:bg-zinc-900 dark:bg-section-dark text-black dark:text-white p-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">My Experience</h1>
            <p className="text-center my-2 text-sm lg:text-lg">I had the opportunity to learn and to work with many interesting companies since I started diving into computer science and web development.</p>
            <div className="p-0 lg:p-5">
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