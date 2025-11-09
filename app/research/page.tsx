"use client"

function ResearchPage() {

    return <div>
        <section id="research" className={`bg-orange-50 bg-section-light dark:bg-zinc-900 dark:bg-section-dark text-black dark:text-white p-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">My Research</h1>
            <p className="text-center my-2 text-sm lg:text-lg">Highlighting the research projects and explorations that fuel my curiosity and technical growth.</p>
            <div className="p-0 lg:p-5">
                Coming soon ! 
            </div>
        </section>

        <section id="awards" className={`bg-orange-50 bg-section-light dark:bg-zinc-900 dark:bg-section-dark text-black dark:text-white p-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">Awards</h1>
            <p className="text-center my-2 text-sm lg:text-lg">I have received several awards that showcase my dedication and accomplishments.</p>
            <div className="p-0 lg:p-5">
            </div>
        </section>
    </div>
}


export default ResearchPage;