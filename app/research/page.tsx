"use client"

import Award from "@/components/Award";
import useSeasonBg from "@/hooks/useSeasonBg";
import Link from "next/link";

function ResearchPage() {

    const bg = useSeasonBg();

    return <div>
        <section id="research" className={`bg-orange-50 dark:bg-zinc-900 ${bg} text-black dark:text-white p-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">My Research</h1>
            <p className="text-center my-2 text-sm lg:text-lg">Highlighting the research projects and explorations that fuel my curiosity and technical growth.</p>
            <div className="p-0 lg:p-5">
                Coming soon ! 
            </div>
        </section>

        <section id="awards" className={`bg-orange-50 dark:bg-zinc-900 ${bg} text-black dark:text-white p-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">Awards</h1>
            <p className="text-center my-2 text-sm lg:text-lg">I have received several awards that showcase my dedication and accomplishments.</p>
            <div className="p-0 lg:p-5 w-full">
                <ul className="list-disc pl-4">
                    <Award title="First Place National Award – Benin National Baccalaureate Exam (High School Leaving Exam), 2023" imgs={["award11.png", "award12.png", "award13.png"]}>
                        <p>Awarded for achieving the highest national score in the 2023 Benin Baccalaureate. Here the link to an <Link target="_blank" href="https://enseignementsuperieur.gouv.bj/actualite/show/ACT-ttcVPNwb-17610E3" className="text-blue-700 dark:text-blue-400 underline text-center">article in french of the Minister of Higher Education and Research</Link>.</p>
                    </Award>
                </ul>
            </div>
        </section>
    </div>
}


export default ResearchPage;