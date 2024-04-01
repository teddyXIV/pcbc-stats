import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
// import User from "@/models/userModel";
import Game from "@/models/gameModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export const GET = async (request: NextRequest) => {
    try {
        const userId = await getDataFromToken(request)

        const games = await Game.find({ user: userId })
            .select("_id plate_appearances singles doubles triples homeruns walks strikeouts hbp")
        return NextResponse.json({
            message: "Games found",
            data: games
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}
