"use client"

import { useAppSelector } from "@/redux/store";
import { Caveat } from "next/font/google";
import { FormEvent, useEffect, useState } from "react";
import Loader from "../Loader";


const font = Caveat({ subsets: ["latin"], weight: '400' });



function Contact() {
    const [bgColor, setBgColor] = useState('bg-zinc-900');
    const [textColor, setTextColor] = useState('text-white');
    const [section, setSection] = useState('bg-zinc-800');
    const [loader, setLoader] = useState("#fff");
    const [fieldsColor, setFieldsColor] = useState('bg-zinc-900 placeholder:text-gray-300');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const theme = useAppSelector((state) => state.theme).theme;


    useEffect(() => {
        const bgColor = (theme === "dark") ? 'bg-zinc-900' : 'bg-orange-50';
        const textColor = (theme === "dark") ? 'text-white' : 'text-black';
        const section = (theme === "dark") ? 'bg-zinc-800' : 'bg-orange-100';
        const loader = (theme === "dark") ? '#fff' : '#000';
        const fieldsColor = (theme === "dark") ? 'bg-zinc-900 placeholder:text-gray-300' : 'bg-orange-300 placeholder:text-gray-600';

        setTextColor(textColor);
        setBgColor(bgColor);
        setSection(section);
        setLoader(loader);
        setFieldsColor(fieldsColor);
    }, [theme]);



    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError('');
        setSuccess(false);
        setLoading(true);

        try {
            
        } catch (error) {
            
        }
    }



    return (
        <section id="contact" className={`${bgColor} ${textColor} p-4 min-h-125 flex flex-col items-center`}>
            <h1 className={`text-center text-3xl lg:text-4xl py-10 ${font.className}`}>Let&apos;s connect</h1>
            <p className="p-2 text-center">Happy you came all the way down 🥳. I would be glad to connect with you. So why not leave your impression of the website. Have a nice day!</p>
            {error && <p className="text-center text-red-500 bg-red-200 border-2 border-red-500 p-3 rounded-lg">{error}</p>}
            {success && <p className="text-center text-green-500 bg-green-200 border-2 border-green-500 p-3 rounded-lg">Email sent successfully!</p>}
            {loading && <div className="flex justify-center items-center p-3">
                <Loader color={loader} size={40} />
            </div>}
            <form id="contactForm" className={`${section} my-10 min-h-96 rounded-lg w-11/12 lg:w-2/6 p-9 flex flex-col `} onSubmit = {handleSubmit}>
                <label htmlFor="name" className="text-base lg:text-lg my-2">Name</label>
                <input type="text" placeholder="John Doe" name="name" id="name" className={`rounded-lg p-3 h-10 ${fieldsColor}`} required />
                <label htmlFor="email" className="text-base lg:text-lg my-2">Email</label>
                <input type="email" placeholder="example@gmail.com" name="email" id="email" className={`rounded-lg p-3 h-10 ${fieldsColor}`} required />
                <label htmlFor="message" className="text-base lg:text-lg my-2">Message</label>
                <textarea name="message" placeholder="Say Hi!" id="message" className={`rounded-lg p-3 ${fieldsColor}`} required></textarea>
                <button className={`rounded-lg p-2 mt-5 w-1/4 mx-auto ${fieldsColor} text-base lg:text-lg`} type="submit">Envoyer</button>
            </form>
        </section>
    )
}



export default Contact;