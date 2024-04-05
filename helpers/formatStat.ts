export const formatStat = (stat: string) => {

    if (stat === "0") {
        return "0";
    }

    if (stat[0] === "0") {
        return stat.slice(1);
    }

    return stat;

}