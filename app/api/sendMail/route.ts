import { NextRequest, NextResponse } from "next/server";




export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, email, message } = await req.json();



    } catch (error) {
        console.log(error);
        return Response.json({ message: 'An error occurred while sending the email' }, { status: 500 });
    }
}