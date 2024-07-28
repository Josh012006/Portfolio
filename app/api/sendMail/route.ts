import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';




export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, email, message } = await req.json();

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
            subject: `Message from ${name} (${email}) in Portfolio`,
            text: 
            `
            ${message}
            `
        };
    
        await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log("An error occurred in the transporter");
                throw new Error("An error occured in the transporter");
            }
            else {
                console.log(info);
            }
        });

        return Response.json({ message: 'Email sent successfully!' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return Response.json({ message: 'An error occurred while sending the email' }, { status: 500 });
    }
}