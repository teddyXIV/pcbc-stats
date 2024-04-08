import ResetPasswordEmailTemplate from "@/emails/reset-password-email-template";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
    try {
        const data = await resend.emails.send({
            from: 'PCBC Stats <onboarding@resend.dev',
            to: ['delivered@resend.dev'],
            subject: 'Hello world',
            react: ResetPasswordEmailTemplate({ email: "t.a.peterschmidt@gmail.com", forgotPasswordToken: "11111" }),
        })

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}