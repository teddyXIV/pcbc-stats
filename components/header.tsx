import Logout from "./logout"
import Link from "next/link";
import { cookies } from 'next/headers'

const Header = () => {

    const cookieStore = cookies();


    const isAuthenticated = () => {
        const token = cookieStore.get("token");

        if (token) {
            return true
        }

        return false
    };


    return (
        <div className="flex flex-row">
            {isAuthenticated() ? <Logout /> : <Link href="/login" className="border-white border-2 rounded text-white py-1 px-2">Login</Link>}
        </div>
    )
}

export default Header;