import type { Totals } from "@/types/game";

const TotalsTable = ({ game }: { game: Totals }) => {


    return (
        <>
            <table className="w-fit mx-auto bg-white border border-gray-200 divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-2 whitespace-nowrap">PA</td>
                        <td className="px-4 py-2 whitespace-nowrap">AB</td>
                        <td className="px-4 py-2 whitespace-nowrap">H</td>
                        <td className="px-4 py-2 whitespace-nowrap">1B</td>
                        <td className="px-4 py-2 whitespace-nowrap">2B</td>
                        <td className="px-4 py-2 whitespace-nowrap">3B</td>
                        <td className="px-4 py-2 whitespace-nowrap">HR</td>
                        <td className="px-4 py-2 whitespace-nowrap">BB</td>
                        <td className="px-4 py-2 whitespace-nowrap">SO</td>
                        <td className="px-4 py-2 whitespace-nowrap">HBP</td>
                        <td className="px-4 py-2 whitespace-nowrap">Sac</td>
                    </tr>
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
                </tbody>
            </table>
        </>

    );
};

export default TotalsTable;


