interface TripleSlash {
    average: number,
    onBase: number,
    slugging: number
}

const TripleSlash = (props: TripleSlash) => {

    return (

        <div className="w-fit border-2 border-black rounded-md my-10 mx-auto">
            <p className="text-5xl m-5">{props.average}/{props.onBase}/{props.slugging}</p>
        </div>

    )
}

export default TripleSlash;