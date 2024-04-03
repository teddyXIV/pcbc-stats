import Link from "next/link"

type CancelGameProp = {
    cancelGame: string | null | undefined
};

const Modal = ({ cancelGame }: CancelGameProp) => {
    const game = cancelGame

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Are you sure you want to delete this game?</h3>
                    <div>
                        <Link href="/your-stats">No</Link>
                        <Link href={`/delete-game/${game}`}>Yes, delete</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;