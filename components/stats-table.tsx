import type { Totals } from "@/types/game";

const StatsTable = ({ game }: { game: Totals }) => {


    return (

        <tr>
            <td className="px-4 py-2 whitespace-nowrap">{game.plate_appearances}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.singles}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.doubles}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.triples}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.homeruns}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.walks}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.strikeouts}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.hbp}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.sacrifice}</td>
        </tr>

    );
};

export default StatsTable;


