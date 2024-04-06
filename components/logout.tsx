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
            <button onClick={logout} className="border-white border-2 rounded-lg text-white hover:border-black hover:text-black hover:bg-white py-1 px-2 m-2">Logout</button>
        </div>
    )
}

export default Logout;