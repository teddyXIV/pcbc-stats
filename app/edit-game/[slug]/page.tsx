"use client"

import { Game } from "@/types/game";
import axios from "axios";
import { useEffect, useState } from "react";

interface EditGameProps {
    params: {
        slug: string
    }
}

const EditGame: React.FC<EditGameProps> = ({ params }) => {
    const [stats, setStats] = useState<Game>()

    useEffect(() => {
        const getGameInfo = async (gameId: string) => {
            try {
                const res = await axios.get('/api/user-stats/get-game', {
                    params: {
                        gameId: params.slug
                    }
                });

                setStats(res.data.data);


            } catch (error) {
                console.error("Error fetching user stats:", error);
            }
        };

        getGameInfo(params.slug);
    }, []);

    console.log(stats)
    return (
        <h1>{stats ? stats.date : "Loading data"}</h1>
    )
}

export default EditGame;