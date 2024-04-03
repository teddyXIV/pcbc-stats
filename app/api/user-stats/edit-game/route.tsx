import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Game from "@/models/gameModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export const PUT = async (request: NextRequest) => {
    try {
        const reqBody = await request.json()
        const { _id, ...updateData } = reqBody; // Extract gameId and updateData
        const userId = await getDataFromToken(request)

        const totalPlateAppearances = updateData.singles + updateData.doubles + updateData.triples + updateData.homeruns + updateData.walks + updateData.strikeouts + updateData.hbp + updateData.sacrifice;
        if (updateData.plate_appearances < totalPlateAppearances) {
            return NextResponse.json({ error: "Plate appearances must be greater than or equal to the sum of other stats" }, { status: 400 });
        }

        // Find the game by ID and user ID
        const game = await Game.findOneAndUpdate(
            { _id, user: userId },
            updateData, // Update with the provided data
            { new: true } // Return the updated game
        );

        if (!game) {
            return NextResponse.json({ error: "Game not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Game updated successfully",
            success: true,
            updatedGame: game
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
