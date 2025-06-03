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
    const [warning, setWarning] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const theme = useAppSelector((state) => state.theme).theme;


    useEffect(() => {
        const bgColor = (theme === "dark") ? 'bg-zinc-900 section-dark' : 'bg-orange-50 section-light';
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
            const formData = new FormData(e.target as HTMLFormElement);

            const name = formData.get('name') as string;
            const email = formData.get('email') as string;
            const message = formData.get('message') as string;

            const response = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            const data = await response.json();

            if (response.ok) {
                setLoading(false);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
            } else {
                setLoading(false);
                if (response.status === 429) {
                    setWarning(data.message);
                } else {
                    setError(data.message);
                }
            }

        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('An error occurred while sending the email in the form!');
        }
    }



    return (
        <section id="contact" className={`${bgColor} ${textColor} p-4 min-h-125 flex flex-col items-center`}>
            <h1 className={`text-center text-3xl lg:text-4xl py-10 ${font.className}`}>Let&apos;s connect</h1>
            <p className="p-2 text-base lg:text-xl text-center">Happy you came all the way down 🥳. I would be glad to connect with you. So why not leave your impression of the website. Have a nice day!</p>
            {error && <p className="text-center text-red-500 bg-red-200 border-2 border-red-500 p-3 rounded-lg">{error}</p>}
            {warning && <p className="text-center text-yellow-500 bg-yellow-200 border-2 border-yellow-500 p-3 rounded-lg">{warning}</p>}
            {success && <p className="text-center text-green-500 bg-green-200 border-2 border-green-500 p-3 rounded-lg">Email sent successfully!</p>}
            {loading && <div className="flex justify-center items-center p-3">
                <Loader color={loader} size={40} />
            </div>}

            <form id="contactForm" className={`${section} text-base lg:text-lg my-10 min-h-96 rounded-lg w-11/12 lg:w-2/6 p-9 flex flex-col `} onSubmit = {handleSubmit}> 
                <label htmlFor="name" className="my-2">Name</label>
                <input type="text" placeholder="John Doe" name="name" id="name" className={`rounded-lg p-3 h-10 ${fieldsColor}`} required />
                <label htmlFor="email" className="my-2">Email</label>
                <input type="email" placeholder="example@gmail.com" name="email" id="email" className={`rounded-lg p-3 h-10 ${fieldsColor}`} required />
                <label htmlFor="message" className="my-2">Message</label>
                <textarea name="message" placeholder="Say Hi!" id="message" className={`rounded-lg p-3 ${fieldsColor}`} required></textarea>
                <button className={`rounded-lg p-3 mt-5 mx-auto ${fieldsColor} flex gap-2 items-center text-base lg:text-lg`} type="submit">Send Message <i className="fa-solid fa-paper-plane" aria-hidden="true"></i></button>
            </form>
        </section>
    )
}



export default Contact;