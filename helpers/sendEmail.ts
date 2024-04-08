"use server";

import { Resend } from "resend";

type CreateEmailOptions = Parameters<typeof Resend.prototype.emails.send>[0]

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (payload: CreateEmailOptions) => {
    const data = await resend.emails.send(payload);

    console.log("Email sent successfully")

    return data;
}

