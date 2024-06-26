"use client"

import axios from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react";
import type { GameForm } from "@/types/game";
import BackButton from "@/components/back-button";

const GameForm = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("")
    const [game, setGame] = useState<GameForm>({
        date: "",
        plate_appearances: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hbp: 0,
        sacrifice: 0
    })

    const onSubmit = async () => {
        try {
            const reponse = await axios.post("api/user-stats/upload-game", game);
            router.push('/');
        } catch (error: any) {
            console.error("Game submission failed", error.message);
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage("Game submission failed. Please try again later.");
            }
        }
    }

    return (
        <div className="flex flex-col w-32 mx-auto justify-center h-screen text-white">
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <div className="mb-2">
                <label htmlFor="date" className="text-left">Date</label>
                <input
                    id="date"
                    type="date"
                    value={game.date}
                    onChange={(e) => setGame({ ...game, date: e.target.value })}
                    className="text-black"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="plate_appearances">Plate Appearances</label>
                <input
                    id="plate_appearances"
                    type="number"
                    step="1"
                    min="0"
                    value={game.plate_appearances}
                    onChange={(e) => setGame({ ...game, plate_appearances: parseInt(e.target.value, 10) })}
                    className="text-black"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="singles">Singles</label>
                <input
                    id="singles"
                    type="number"
                    step="1"
                    min="0"
                    value={game.singles}
                    onChange={(e) => setGame({ ...game, singles: parseInt(e.target.value, 10) })}
                    className="text-black"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="doubles">Doubles</label>
                <input
                    id="doubles"
                    type="number"
                    step="1"
                    min="0"
                    value={game.doubles}
                    onChange={(e) => setGame({ ...game, doubles: parseInt(e.target.value, 10) })}
                    className="text-black"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="triples">Triples</label>
                <input
                    id="triples"
                    type="number"
                    step="1"
                    min="0"
                    value={game.triples}
                    onChange={(e) => setGame({ ...game, triples: parseInt(e.target.value, 10) })}
                    className="text-black"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="homeruns">Homeruns</label>
                <input
                    id="homeruns"
                    type="number"
                    step="1"
                    min="0"
                    value={game.homeruns}
                    onChange={(e) => setGame({ ...game, homeruns: parseInt(e.target.value, 10) })}
                    className="text-black"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="walks">Walks</label>
                <input
                    id="walks"
                    type="number"
                    step="1"
                    min="0"
                    value={game.walks}
                    onChange={(e) => setGame({ ...game, walks: parseInt(e.target.value, 10) })}
                    className="text-black"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="strikeouts">Strikeouts</label>
                <input
                    id="strikeouts"
                    type="number"
                    step="1"
                    min="0"
                    value={game.strikeouts}
                    onChange={(e) => setGame({ ...game, strikeouts: parseInt(e.target.value, 10) })}
                    className="text-black"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="hbp">Hit By Pitch</label>
                <input
                    id="hbp"
                    type="number"
                    step="1"
                    min="0"
                    value={game.hbp}
                    onChange={(e) => setGame({ ...game, hbp: parseInt(e.target.value, 10) })}
                    className="text-black"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="sacrifice">Sacrifice</label>
                <input
                    id="scrifice"
                    type="number"
                    step="1"
                    min="0"
                    value={game.sacrifice}
                    onChange={(e) => setGame({ ...game, sacrifice: parseInt(e.target.value, 10) })}
                    className="text-black"
                />
            </div>
            <div className="flex flex-col">
                <button onClick={onSubmit} className="border-2 border-white text-white hover:border-black hover:text-black hover:bg-white rounded-lg py-1 px-2 mb-2">Submit</button>
                <BackButton text="Nevermind" />
            </div>
        </div>
    )
}

export default GameForm;