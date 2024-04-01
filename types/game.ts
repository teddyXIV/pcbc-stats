export interface Game {
    _id: string,
    plate_appearances: number,
    singles: number,
    doubles: number,
    triples: number,
    homeruns: number,
    walks: number,
    strikeouts: number,
    hbp: number,
    sacrifice: number
}

export interface Totals {
    plate_appearances: number,
    singles: number,
    doubles: number,
    triples: number,
    homeruns: number,
    walks: number,
    strikeouts: number,
    hbp: number,
    sacrifice: number
}