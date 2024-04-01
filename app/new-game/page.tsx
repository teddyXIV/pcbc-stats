"use client"

import axios from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react";

const NewGame = () => {
    const router = useRouter();
    const [game, setGame] = useState({
        date: "",
        pa: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        strikeouts: 0,
        hbp: 0
    })

    const onSubmit = async () => {
        try {
            const reponse = await axios.post("api/user-stats/upload-game", game);
            router.push('/');
        } catch (error: any) {
            console.log("Game submission failed", error.message);
        }
    }

    return (
        <div>
            <label htmlFor="date">Date</label>
            <input
                id="date"
                type="date"
                value={game.date}
                onChange={(e) => setGame({ ...game, date: e.target.value })}
            />
            <label htmlFor="pas">Plate Appearances</label>
            <input
                id="pas"
                type="number"
                step="1"
                value={game.pa}
                onChange={(e) => setGame({ ...game, pa: parseInt(e.target.value, 10) })}
            />
            <label htmlFor="singles">Singles</label>
            <input
                id="singles"
                type="number"
                step="1"
                value={game.singles}
                onChange={(e) => setGame({ ...game, singles: parseInt(e.target.value, 10) })}
            />
            <label htmlFor="doubles">Doubles</label>
            <input
                id="doubles"
                type="number"
                step="1"
                value={game.doubles}
                onChange={(e) => setGame({ ...game, doubles: parseInt(e.target.value, 10) })}
            />
            <label htmlFor="triples">Triples</label>
            <input
                id="triples"
                type="number"
                step="1"
                value={game.triples}
                onChange={(e) => setGame({ ...game, triples: parseInt(e.target.value, 10) })}
            />
            <label htmlFor="homeruns">Homeruns</label>
            <input
                id="homeruns"
                type="number"
                step="1"
                value={game.homeruns}
                onChange={(e) => setGame({ ...game, homeruns: parseInt(e.target.value, 10) })}
            />
            <label htmlFor="walks">Walks</label>
            <input
                id="walks"
                type="number"
                step="1"
                value={game.walks}
                onChange={(e) => setGame({ ...game, walks: parseInt(e.target.value, 10) })}
            />
            <label htmlFor="strikeouts">Strikeouts</label>
            <input
                id="strikeouts"
                type="number"
                step="1"
                value={game.strikeouts}
                onChange={(e) => setGame({ ...game, strikeouts: parseInt(e.target.value, 10) })}
            />
            <label htmlFor="hbp">Hit By Pitch</label>
            <input
                id="hbp"
                type="number"
                step="1"
                value={game.hbp}
                onChange={(e) => setGame({ ...game, hbp: parseInt(e.target.value, 10) })}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default NewGame;