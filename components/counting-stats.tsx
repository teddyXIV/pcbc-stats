const CountingStats = () => {
    const stats = [
        ['Games', '25'],
        ['PA', '100'],
        ['AB', '90'],
        ['H', '30'],
        ['2B', '6'],
        ['3B', '3'],
        ['HR', '2'],
        ['RBI', '50'],
        ['BB', '8'],
        ['SO', '15'],
        ['HBP', '2']
    ];

    return (
        // <div className="max-w-md mx-auto">
        <table className="w-fit mx-auto bg-white border border-gray-200 divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
                {/* First row for stat names */}
                <tr>
                    {stats.map(([stat]) => (
                        <td key={stat} className="px-4 py-2 whitespace-nowrap">{stat}</td>
                    ))}
                </tr>
                {/* Second row for totals */}
                <tr>
                    {stats.map(([, total]) => (
                        <td key={total} className="px-4 py-2 whitespace-nowrap">{total}</td>
                    ))}
                </tr>
            </tbody>
        </table>
        // </div>
    );
};

export default CountingStats;


