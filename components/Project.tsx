"use client"

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";






function Project({ children, title, src, github } : { children: ReactNode, title: string, src: string, github: string }) {

    const [num, setNum] = useState(0);

    useEffect(() => {
        const myNum = Math.floor(Math.random() * 5);
        setNum(myNum);
    }, []);


    return (
        <div className="min-h-96 lg:m-6 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center text-base lg:text-lg">
            {(num % 2 == 0) && <video className="rounded-lg m-5" preload="none" controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>}
            <div className="col-span-1 p-0 lg:p-5 m-2">
                <h1 className="text-center text-lg lg:text-xl font-bold my-2">{title}</h1>
                <div className="text-justify">
                    {children}
                </div>
                <br />
                You can find the source code <Link target="_blank" href={github} className="text-blue-700">here</Link>.
            </div>
            {(num % 2 == 1) && <video className="rounded-lg m-5" preload="none" controls>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>}
        </div>
    )
}



export default Project;