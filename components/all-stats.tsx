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
                setLoading(false)
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
        view =
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
                <h2 className="text-white">No games have been submitted. Submit a game to view your stats! </h2>
                <div className="flex justify-center">
                    <Link href="/new-game" className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2">Submit a new game</Link>
                </div>
            </div>


    } else if (stats.length > 0 && !loading) {
        view =
            <>
                <div className="sm:w-screen">
                    <TripleSlash
                        average={analyzedStats.average.toFixed(3)}
                        onBase={analyzedStats.onBase.toFixed(3)}
                        slugging={analyzedStats.slugging.toFixed(3)}
                    />

                    <h2 className="text-center text-white text-3xl my-2">Totals</h2>
                    <div className="overflow-auto">
                        <TotalsTable game={Totals} />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-center text-white text-3xl mb-2 mt-4">Games</h2>
                        <Link href="/new-game" className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2 mb-2 mx-auto">Submit a new game</Link>
                    </div>
                    <div className="overflow-auto">
                        <table className="w-11/12 mx-auto bg-white border border-gray-200 divide-y divide-gray-200 overscroll-x-contain">
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
            {loading ? <h2 className="text-center text-3xl text-white my-10">Loading stats...</h2> : null}
            {view}
        </main>
    );
}

export default AllStats;