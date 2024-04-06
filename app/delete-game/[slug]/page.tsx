"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface DeleteGameProps {
    params: {
        slug: string
    }
}

const DeletePage = ({ params }: DeleteGameProps) => {
    const router = useRouter();

    const handleClick = async () => {

        try {
            const res = await axios.delete('/api/user-stats/delete-game', {
                params: {
                    gameId: params.slug
                }
            });

            router.push('/');

        } catch (error) {
            console.error("Error fetching user stats:", error);
        }

    }

    return (
        <div className="flex flex-col w-64 mx-auto justify-center h-screen text-white">
            <h2>Are you sure you want to delete this game?</h2>
            <Link href="/" className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2 mb-2 text-center">No</Link>
            <button onClick={handleClick} className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2">Yes, delete this game</button>
        </div>
    )
}

export default DeletePage;