"use client"

import axios from "axios"
import { useRouter } from "next/navigation";

const Logout = () => {
    const router = useRouter();

    const logout = async () => {
        try {
            await axios.get('api/users/logout');
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <button onClick={logout} className="border-2 rounded py-1 px-2 bg-lime-500">Logout</button>
        </div>
    )
}

export default Logout;