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

            router.push('/your-stats');

        } catch (error) {
            console.error("Error fetching user stats:", error);
        }

    }

    return (
        <>
            <h2>Are you sure you want to delete this game?</h2>
            <Link href="/your-stats">No</Link>
            <button onClick={handleClick}>Yes, delete this game</button>
        </>
    )
}

export default DeletePage;