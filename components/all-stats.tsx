"use client"

import TripleSlash from "@/components/triple-slash";
import TotalsTable from "@/components/totals-table";
import OneGameTable from "@/components/one-game-table";
import axios from "axios";
import Link from "next/link";
import StatTitles from "@/components/stat-titles";
import { statCrunch } from "@/helpers/statCrunch";
import { useState, useEffect } from "react";
import type { Game, Totals } from "@/types/game";

const AllStats = () => {
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


    const analyzedStats = statCrunch(stats)

    const Totals: Totals = {
        plate_appearances: analyzedStats.totalPAs,
        hits: analyzedStats.totalHits,
        at_bats: analyzedStats.totalAtBats,
        singles: analyzedStats.totalSingles,
        doubles: analyzedStats.totalDoubles,
        triples: analyzedStats.totalTriples,
        homeruns: analyzedStats.totalHomers,
        walks: analyzedStats.totalBBs,
        strikeouts: analyzedStats.totalSOs,
        hbp: analyzedStats.totalHBPs,
        sacrifice: analyzedStats.totalSacrifices
    }

    const individualGames = stats.map((game) => {
        return (
            <OneGameTable game={game} />
        )
    })

    let view;

    if (stats.length === 0 && !loading) {
        view = <h2 className="text-white">No games have been submitted. Submit a game to view your stats! </h2>
    } else if (stats.length > 0 && !loading) {
        view =
            <>
                <div>
                    <TripleSlash
                        average={analyzedStats.average.toFixed(3)}
                        onBase={analyzedStats.onBase.toFixed(3)}
                        slugging={analyzedStats.slugging.toFixed(3)}
                    />
                    <div>
                        <h2 className="text-center text-white">Totals</h2>
                        <TotalsTable game={Totals} />
                    </div>
                    <div>
                        <h2 className="text-center text-white">Games</h2>
                        <table className="w-fit mx-auto bg-white border border-gray-200 divide-y divide-gray-200">
                            <tbody className="divide-y divide-gray-200">
                                <StatTitles />
                                {individualGames}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
    }

    return (
        <main>
            <div className="flex justify-center">
                <Link href="/new-game" className="border-2 border-white text-white rounded-lg py-1 px-2">Submit a new game</Link>
            </div>
            {loading ? <h2 className="text-center text-3xl text-white my-10">Loading stats...</h2> : null}
            {view}
        </main>
    );
}

export default AllStats;