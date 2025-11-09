"use client"

import { Zeyada } from "next/font/google";


const font = Zeyada({ subsets: ["latin"], weight: '400' });


function Footer() {


    return(
        <footer className={`flex justify-between items-center min-h-16 px-3 lg:px-14 ${font.className} text-black dark:text-white border-t-2 border-t-zinc-950 bg-orange-100 dark:bg-black`}>
            <span className="text-xl">Happy you made it to the end!</span>
            <span className="text-2xl pr-2 lg:pr-16">Josué Mongan</span>
        </footer>
    )
}

export default Footer;