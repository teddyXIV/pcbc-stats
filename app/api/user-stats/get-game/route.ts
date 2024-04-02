import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Game from "@/models/gameModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export const GET = async (request: NextRequest) => {
    try {

        const url = new URL(request.url)

        const gameId = url.searchParams.get("gameId")
        // const { gameId } = await request.query;

        if (!gameId) {
            return NextResponse.json({ error: "Game ID is required" }, { status: 400 });
        }

        const userId = await getDataFromToken(request);

        // Retrieve the specific collection based on the collection ID and user ID
        const game = await Game.findOne({ _id: gameId, user: userId });

        if (!game) {
            return NextResponse.json({ error: "Collection not found" }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: game
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}