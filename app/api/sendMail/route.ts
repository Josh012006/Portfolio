import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit ({
    redis: kv,
    limiter: Ratelimit.slidingWindow(5, '60s')
})


export const config = {
    runtime: 'edge',
}



export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, email, message } = await req.json();
        const ip = req.ip ?? '127.0.0.1';

        const { limit, reset, remaining } = await ratelimit.limit(ip);

        if (remaining === 0) {
            return new Response(JSON.stringify({ error: 'Rate limit exceeded! Try again later!' }), {
                status: 429,
                headers: {
                    'X-RateLimit-Limit': limit. toString(),
                    'X-RateLimit-Remaining': remaining. toString(),
                    'X-RateLimit-Reset': reset. toString(),
                }
            })
        } else {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'josuesmjr.mongan@gmail.com',
                    pass: process.env.EMAIL_PASSWORD
                }
            });
        
            const mailOptions = {
                from: email,
                to: 'josuesmjr.mongan@gmail.com',
                replyTo: email,
                subject: `Message from ${name} (${email}) in Portfolio`,
                text: 
                `
                ${message}
                `,
                html: `
                    <p>Vous avez reçu un message depuis le formulaire de contact :</p>
                    <p><strong>De :</strong> ${email}</p>
                    <p><strong>Message :</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `
            };
        
            await new Promise((resolve, reject) => {
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log("An error occurred in the transporter");
                        reject(error);
                        throw new Error("An error occured in the transporter");
                    }
                    else {
                        console.log(info);
                        resolve(info);
                    }
                });
            });

            return Response.json({ message: 'Email sent successfully!' }, { status: 200 });
        }

    } catch (error) {
        console.log(error);
        return Response.json({ message: 'An error occurred while sending the email' }, { status: 500 });
    }
}