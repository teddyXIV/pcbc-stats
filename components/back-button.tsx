"use client"

import { useRouter } from "next/navigation"

interface BackButtonProps {
    text: String
}

const BackButton = (props: BackButtonProps) => {
    const router = useRouter()

    const handleClick = () => {
        router.back();
    }

    return (
        <button onClick={handleClick} className="border-2 border-white text-white rounded-lg py-1 px-2">{props.text}</button>
    )
}

export default BackButton;