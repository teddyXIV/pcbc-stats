import type { Totals } from "@/types/game";

const TotalsTable = ({ game }: { game: Totals }) => {


    return (

        <tr key="total_table">
            <td className="px-4 py-2 whitespace-nowrap">{game.plate_appearances}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.at_bats}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.hits}</td>
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

export default TotalsTable;


