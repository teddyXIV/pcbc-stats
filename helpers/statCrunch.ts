import type { Game } from "../types/game";


interface StatSummary {
    totalPAs: number;
    totalSingles: number;
    totalDoubles: number;
    totalTriples: number;
    totalHomers: number;
    totalBBs: number;
    totalSOs: number;
    totalHBPs: number;
    totalSacrifices: number;
    totalAtBats: number;
    totalHits: number;
    average: number;
    onBase: number;
    slugging: number;
}

export const statCrunch = (gameList: Game[]): StatSummary => {
    const totalPAs = gameList.reduce((total, game) => total + game.plate_appearances, 0);
    const totalSingles = gameList.reduce((total, game) => total + game.singles, 0);
    const totalDoubles = gameList.reduce((total, game) => total + game.doubles, 0);
    const totalTriples = gameList.reduce((total, game) => total + game.triples, 0);
    const totalHomers = gameList.reduce((total, game) => total + game.homeruns, 0);
    const totalBBs = gameList.reduce((total, game) => total + game.walks, 0);
    const totalSOs = gameList.reduce((total, game) => total + game.strikeouts, 0);
    const totalHBPs = gameList.reduce((total, game) => total + game.hbp, 0);
    const totalSacrifices = gameList.reduce((total, game) => total + game.sacrifice, 0);

    const totalAtBats = totalPAs - (totalBBs + totalHBPs + totalSacrifices)
    const totalHits = totalSingles + totalDoubles + totalTriples + totalHomers
    const average = totalHits / (totalPAs)
    const onBase = (totalHits + totalBBs + totalHBPs) / totalPAs
    const slugging = (totalSingles + (2 * totalDoubles) + (3 * totalTriples) + (4 * totalHomers)) / totalAtBats

    return {
        totalPAs,
        totalSingles,
        totalDoubles,
        totalTriples,
        totalHomers,
        totalBBs,
        totalSOs,
        totalHBPs,
        totalSacrifices,
        totalAtBats,
        totalHits,
        average,
        onBase,
        slugging
    };
}