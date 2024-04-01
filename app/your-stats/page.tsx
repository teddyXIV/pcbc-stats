"use client"

import axios from "axios";
import { useState, useEffect } from "react";

const YourStats = () => {

    const [stats, setStats] = useState("No stats");

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const res = await axios.get('/api/users/your-stats');
                setStats(res.data.data[0].date);
            } catch (error) {
                console.error("Error fetching user stats:", error);
            }
        };

        getUserDetails();
    }, []);

    return (
        <div>
            <h1>Your Stats</h1>
            <h2>{stats === "No stats" ? "No stats" : stats}</h2>
        </div>
    );
}

export default YourStats;
