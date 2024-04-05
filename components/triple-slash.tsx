import { formatStat } from "@/helpers/formatStat";

interface TripleSlash {
    average: string,
    onBase: string,
    slugging: string
}

const TripleSlash = (props: TripleSlash) => {
    const displayAvg = formatStat(props.average)
    const displayOB = formatStat(props.onBase)
    const displaySlug = formatStat(props.slugging)

    return (

        <div className="flex flex-row w-fit border-2 border-white rounded-lg my-10 mx-auto text-5xl text-white m-5 p-5">
            <div className="flex flex-col ">{displayAvg}<span className="text-xs">Batting average</span></div>/<div className="flex flex-col">{displayOB}<span className="text-xs">On base</span></div>/<div className="flex flex-col">{displaySlug}<span className="text-xs">Slugging</span></div>
        </div>

    )
}

export default TripleSlash;