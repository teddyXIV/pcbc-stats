import Image from "next/image"
import Link from "next/link"
import logo from "../assets/pcbc-logo.png"
import Logout from "./logout"

const Header = () => {
    return (
        <div className="flex flex-row h-28 bg-gradient-to-r from-slate-600 to-slate-800">
            <div className="w-1/4 h-28">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="PCBC logo"
                        priority
                        className="w-28 h-28 m-0 cursor-pointer hover:opacity-75"
                    />
                </Link>
            </div>
            <div className="flex justify-center w-1/2">
                <h1 className="text-white text-6xl my-6">PCBC Stats</h1>
            </div>
            <div className="w-1/4 flex justify-center">
                <Logout />
            </div>
        </div>
    )
}

export default Header;