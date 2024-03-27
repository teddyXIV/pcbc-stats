import Image from "next/image"
import Link from "next/link"
import logo from "../assets/pcbc-logo.png"

const Header = () => {
    return (
        <div className="grid grid-rows-1 h-28 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="w-28 h-28">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="PCBC logo"
                        priority
                        className="w-28 h-28 m-0 cursor-pointer hover:opacity-75"
                    />
                </Link>
            </div>
            <div className="flex justify-center">
                <h1 className="text-6xl my-6">PCBC Stats</h1>
            </div>
        </div>
    )
}

export default Header;