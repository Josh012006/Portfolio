"use client"

import Career from "@/components/Career";
import Link from "next/link";

function EducationPage() {

    return(
        <section id="education" className={`bg-orange-50 bg-section-light dark:bg-zinc-900 dark:bg-section-dark text-black dark:text-white p-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">My Education</h1>
            <p className="text-center my-2 text-sm lg:text-lg">Here&apos;s a snapshot of my academic journey and the foundation that shapes my skills.</p>
            <div className="p-0 lg:p-5">
                <Career title="Software Development Bootcamp at GOMYCODE" logo="gomycode.jpeg" period="January 2024 - July 2024 (6 months)" companyInfos="GomyCode Sénégal" site="https://gomycode.com/home-01/" mail="hello@gomycode.com">
                    I participated in a 6 months bootcamp at GOMYCODE SENEGAL. There I learned all there was to know about fullstack web development. We started with the basics like HTML, CSS (with Bootstrap, TailwindCSS and also SASS) and JavaScript (with the DOM and ES6). We then learned how to use Git and Github for Version Control. 
                    Then next step was to build a solid foundation in Algorithms. So we explored data structures, recursion, sorting and searching algorithms and worked mainly on our logic and our critical thinking. After that we dived into relational databases with SQL (DDL, DML, DQL and MySQL) and non-relational databases focusing mainly on MongoDB and Mongoose. 
                    We then learned how to build APIs with NodeJS, Express and RESTful APIs. We also learned how to use Postman to test our APIs. We then learned how to use ReactJS and TypeScript to build the frontend of our applications. We also learned how to use Redux and Redux Toolkit for state management. We then learned how to use NextJS to build server side 
                    rendered applications. We also learned how to use Agile methodologies to manage our projects. 
                    <br />
                    <br />
                    It was a truly enriching experience and I learned a lot. I also had the opportunity to work on a lot of projects and to collaborate with a lot of people. I also learned how to work in a team and how to manage my time and my tasks.
                    <br />
                    At the end of the bootcamp, I received a <Link className="text-blue-700 dark:text-blue-400 underline" target="_blank" href="https://diploma.gomycode.app/?id=31722254428800479">certification in fullstack web development</Link> for my dedication and to prove my knowledge.
                </Career>
            </div>
        </section>
    )
}


export default EducationPage;