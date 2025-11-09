"use client"

import Link from "next/link";
import { ReactNode } from "react";





function Career({children, title, logo, period, companyInfos, site, mail}: {children: ReactNode, title: string, logo: string, period: string, companyInfos: string, mail: string, site?: string}) {
    return(
        <div className="my-20 text-sm lg:text-lg">
            <h2 className="text-center text-xl lg:text-2xl py-3 font-bold">{title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center gap-1">
                <div className="flex flex-col items-center gap-1">
                    <span className="font-bold">{companyInfos}</span>
                    {site && <Link target="_blank" href={`${site}`} className="text-sky-400 underline">{site}</Link>}
                    <Link target="_blank" href={`mailto:${mail}`} className="text-blue-400 underline">{mail}</Link>
                </div>
                <p className="font-bold">{period}</p>
                <img alt="company" src={`/career/logos/${logo}`} className="w-36 h-36" />
            </div>
            <div className="my-2 py-2 text-justify">
                {children}
            </div>
        </div>
    )
}



export default Career;