"use server"

import User from "@/models/userModel"
import crypto from "crypto";
// import { Resend } from "resend";
import { sendEmail } from "./sendEmail";
import ResetPasswordEmailTemplate from "@/emails/reset-password-email-template";
import { connect } from "@/dbConfig/dbConfig";

connect();
// const resend = new Resend(process.env.RESEND_API_KEY)

export const resetPassword = async (email: string) => {

    console.log("Reset password for " + email);

    const user = await User.findOne({ email })

    if (!user) {
        throw new Error("User not found")
    }

    const forgotPasswordToken = crypto.randomBytes(32).toString("base64url");
    const today = new Date();

    const expiryDate = new Date(today.setDate(today.getDate() + 1));

    await User.findByIdAndUpdate(user.id, { forgotPasswordToken: forgotPasswordToken, forgotPasswordTokenExpiry: expiryDate })

    await sendEmail({
        from: "PCBC Stats <t.a.peterschmidt@gmail.com>",
        to: [email],
        subject: "Reset your password",
        react: ResetPasswordEmailTemplate({ email, forgotPasswordToken })
    });

    return "Password reset email sent"

}