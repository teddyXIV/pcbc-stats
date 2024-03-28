import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

const YourStats = () => {
    const router = useRouter()
    const [stats, setStats] = useState("No stats")

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/stats')
        setStats(res.data.data._id)
    }

    return (
        <div>
            <h1>Your Stats</h1>
            <h2>{stats === "No stats" ? "No stats" : stats}</h2>
            <button onClick={getUserDetails}>Stats</button>
        </div>
    )
}

export default YourStats;