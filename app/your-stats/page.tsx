"use client"

import TripleSlash from "@/components/triple-slash";
import axios from "axios";
import { useState, useEffect } from "react";
import type { Game, Totals } from "@/types/game";
import StatsTable from "@/components/stats-table";

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

    const totalPAs = stats.reduce((total, game) => total + game.plate_appearances, 0);
    const totalSingles = stats.reduce((total, game) => total + game.singles, 0);
    const totalDoubles = stats.reduce((total, game) => total + game.doubles, 0);
    const totalTriples = stats.reduce((total, game) => total + game.triples, 0);
    const totalHomers = stats.reduce((total, game) => total + game.homeruns, 0);
    const totalBBs = stats.reduce((total, game) => total + game.walks, 0);
    const totalSOs = stats.reduce((total, game) => total + game.strikeouts, 0);
    const totalHBPs = stats.reduce((total, game) => total + game.hbp, 0);
    const totalSacrifices = stats.reduce((total, game) => total + game.sacrifice, 0);

    const atBats = totalPAs - (totalBBs + totalHBPs + totalSacrifices)
    const totalHits = totalSingles + totalDoubles + totalTriples + totalHomers
    const average = totalHits / (totalPAs)
    const onBase = (totalHits + totalBBs + totalHBPs) / totalPAs
    const slugging = (totalSingles + (2 * totalDoubles) + (3 * totalTriples) + (4 * totalHomers)) / atBats

    const Totals: Totals = {
        plate_appearances: totalPAs,
        singles: totalSingles,
        doubles: totalDoubles,
        triples: totalTriples,
        homeruns: totalHomers,
        walks: totalBBs,
        strikeouts: totalSOs,
        hbp: totalHBPs,
        sacrifice: totalSacrifices
    }

    return (
        <div>
            <h1>Your Stats</h1>
            {loading ? <h2>Loading stats...</h2> : null}
            {stats.length > 0 ?
                <div>
                    <TripleSlash
                        average={parseFloat(average.toFixed(3))}
                        onBase={parseFloat(onBase.toFixed(3))}
                        slugging={parseFloat(slugging.toFixed(3))} />
                    <table className="w-fit mx-auto bg-white border border-gray-200 divide-y divide-gray-200">
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-2 whitespace-nowrap">PA</td>
                                <td className="px-4 py-2 whitespace-nowrap">1B</td>
                                <td className="px-4 py-2 whitespace-nowrap">2B</td>
                                <td className="px-4 py-2 whitespace-nowrap">3B</td>
                                <td className="px-4 py-2 whitespace-nowrap">HR</td>
                                <td className="px-4 py-2 whitespace-nowrap">BB</td>
                                <td className="px-4 py-2 whitespace-nowrap">SO</td>
                                <td className="px-4 py-2 whitespace-nowrap">HBP</td>
                                <td className="px-4 py-2 whitespace-nowrap">Sac</td>
                            </tr>
                            <StatsTable game={Totals} />
                        </tbody>
                    </table>
                </div>
                : <h2>No stats available</h2>}

        </div>
    );
}

export default YourStats;
