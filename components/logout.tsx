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
            <button onClick={logout} className="border-white border-2 rounded text-white py-1 px-2">Logout</button>
        </div>
    )
}

export default Logout;