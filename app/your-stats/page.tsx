"use client"

import axios from "axios";
import { useState, useEffect } from "react";

interface Game {
    _id: string,
    plate_appearances: number,
    singles: number,
    doubles: number,
    triples: number,
    homeruns: number,
    walks: number,
    strikeouts: number,
    hbp: number,
}

const YourStats = () => {
    const [loading, setLoading] = useState(true)
    const [stats, setStats] = useState<Game[]>([]);

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const res = await axios.get('/api/users/your-stats');
                setLoading(false);
                setStats(res.data.data);
            } catch (error) {
                console.error("Error fetching user stats:", error);
            }
        };

        getUserDetails();
    }, []);

    const homers = stats.map((game) => {
        return (
            <h1 key={game._id}>{game.homeruns}</h1>
        )
    })

    return (
        <div>
            <h1>Your Stats</h1>
            <h2>{loading ? "Loading stats..." : ""}</h2>
            {stats.length === 0 ? "No stats" : homers}
        </div>
    );
}

export default YourStats;
