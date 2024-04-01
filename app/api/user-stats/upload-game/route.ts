import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Game from "@/models/gameModel";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

connect()

export const POST = async (request: NextRequest) => {
    try {
        const reqBody = await request.json()
        const { date, singles, doubles, triples, homeruns, walks, strikeouts, hbp } = reqBody
        const userId = await getDataFromToken(request)
        console.log(userId)


        const newGame = new Game({
            user: userId,
            date,
            singles,
            doubles,
            triples,
            homeruns,
            walks,
            strikeouts,
            hbp
        })

        const savedGame = await newGame.save()

        return NextResponse.json({
            message: "Game uploaded successfully",
            success: true,
            savedGame
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}