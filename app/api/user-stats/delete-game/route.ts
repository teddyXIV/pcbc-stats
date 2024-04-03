import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Game from "@/models/gameModel";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const revalidate = true

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


        revalidatePath('your-stats')
        return NextResponse.json({
            success: true,
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}