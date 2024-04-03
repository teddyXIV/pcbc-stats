import type { OneGame } from "@/types/game";
import Link from "next/link";

const OneGameTable = ({ game }: { game: OneGame }) => {


    return (

        <tr key={game._id}>
            <td className="px-4 py-2 whitespace-nowrap">{game.date}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.plate_appearances}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.singles}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.doubles}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.triples}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.homeruns}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.walks}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.strikeouts}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.hbp}</td>
            <td className="px-4 py-2 whitespace-nowrap">{game.sacrifice}</td>
            <td className="px-4 py-2 whitespace-nowrap"><Link href={`/edit-game/${game._id}`}>Edit</Link></td>
            <td className="px-4 py-2 whitespace-nowrap"><Link href={'/your-stats?show=true'}>Delete</Link></td>
        </tr>

    );
};

export default OneGameTable;
