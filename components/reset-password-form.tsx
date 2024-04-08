"use client";
import React, { useState } from 'react'
import { resetPassword } from '@/helpers/resetPassword';

const ResetPasswordForm = () => {

    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async () => {
        const message = await resetPassword(email);
        // const message = "hello"

        setMessage(message);
    }

    return (
        <div className="flex flex-col gap-4 text-white">
            <h1>Reset Password</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black"
            />
            <button onClick={handleSubmit}>
                Reset Password
            </button>
            <p>{message}</p>
        </div>
    )
}

export default ResetPasswordForm