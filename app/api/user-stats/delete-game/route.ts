import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Game from "@/models/gameModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export const DELETE = async (request: NextRequest) => {
    try {

        const url = new URL(request.url)

        const gameId = url.searchParams.get("gameId")
        // const { gameId } = await request.query;

        if (!gameId) {
            return NextResponse.json({ error: "Game ID is required" }, { status: 400 });
        }

        const userId = await getDataFromToken(request);

        // Retrieve the specific collection based on the collection ID and user ID
        const deleteResult = await Game.deleteOne({ _id: gameId, user: userId });

        if (deleteResult.deletedCount === 0) {
            return NextResponse.json({ error: "Game not found" }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            redirectUrl: "/your-stats"
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}