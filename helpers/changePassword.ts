"use server"

import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

export const changePassword = async (forgotPasswordToken: string, password: string) => {
    const user = await User.findOne({
        forgotPasswordToken
    })

    if (!user) {
        throw new Error("User not found")
    }

    const forgotPasswordTokenExpiry = user.forgotPasswordTokenExpiry;
    if (!forgotPasswordTokenExpiry) {
        throw new Error('Token expired');
    }

    const today = new Date();

    if (today > forgotPasswordTokenExpiry) {
        throw new Error('Token expired');
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    await user.findByIdAndUpdate(user.id, { password: hashedPassword })

    return "Password changed successfully"
}