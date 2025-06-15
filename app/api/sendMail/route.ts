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
                    <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; background-color: #eee; border-radius: 7px; text-align: center;">
                        <p style="font-weight: bold;">Vous avez reçu un message depuis le formulaire de contact :</p>
                        <p><strong>De :</strong> <span style="color: #0056b3;">${email}</span></p>
                        <p><strong>Message :</strong></p>
                        <p style="line-height: 1.5;">${message.replace(/\n/g, '<br>')}</p>
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