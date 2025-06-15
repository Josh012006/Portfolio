import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit ({
    redis: kv,
    limiter: Ratelimit.slidingWindow(5, '900s')
});




export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, email, message } = await req.json();
        // const ip = req.ip ?? '127.0.0.1';

        // const { limit, reset, remaining } = await ratelimit.limit(ip);
        // remaining === 0
        if (false) {
            // return Response.json({ message: 'Rate limit exceeded! Try again later!' }, {
            //     status: 429,
            //     headers: {
            //         'X-RateLimit-Limit': limit. toString(),
            //         'X-RateLimit-Remaining': remaining. toString(),
            //         'X-RateLimit-Reset': reset. toString(),
            //     }
            // })
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
                    <div style="display: flex; justify-content: center; align-content: center;">
                        <div style="max-width: 500px; font-family: Times New Roman; font-size: 16px; color: #333; background-color: #EDEDED; border-radius: 7px; margin: auto; padding: 15px 25px;">
                            <h3 style="text-align: center;">Vous avez reçu un message depuis le formulaire de contact :</h2>
                            <p>De : <span style="color: #0056b3;">${email}</span></p>
                            <h4>Message :</h3>
                            <p style="line-height: 1.5;">${message.replace(/\n/g, '<br>')}</p>
                        </div>
                    </div>
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