"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';

const SignUpPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    })

    const onSignUp = async () => {
        try {
            const reponse = await axios.post("/api/users/signup", user);
            router.push("/login");
        } catch (error: any) {
            console.log("Signup failed", error.message);
        }
    }

    return (
        <div className="flex flex-col">
            <label htmlFor="username">username</label>
            <input
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button onClick={onSignUp} className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2 my-2">Sign up</button>
            <Link href="/login" className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2 my-2">Already have an account? Log in!</Link>
        </div>
    )
}

export default SignUpPage;