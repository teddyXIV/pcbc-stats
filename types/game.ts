export interface Game {
    _id: string,
    date: string,
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
    hits: number,
    at_bats: number,
    singles: number,
    doubles: number,
    triples: number,
    homeruns: number,
    walks: number,
    strikeouts: number,
    hbp: number,
    sacrifice: number
}

export interface OneGame {
    _id: string,
    date: string,
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

export interface GameForm {
    date: string,
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