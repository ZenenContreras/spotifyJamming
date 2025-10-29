export default function Tracks ({tracks}) {

    if(tracks === 0 || !tracks){
        return (
            <div>
                <h1>No hay tracks para mostrar</h1>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 text-white">
            {tracks.map(track => (
                <div
                key={track.id}
                className="flex items-center justify-around gap-4 bg-[#1e1e3a] rounded-lg p-3 "
                >
                    <img
                        src={track.image}
                        alt={track.name}
                        className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">{track.name}</span>
                        <span className="text-sm text-gray-300">{track.artist}</span>
                        <span className="text-xs text-gray-500 italic">{track.album}</span>

                        {track.preview_url ? (
                        <audio
                            controls
                            src={track.preview_url}
                            className="mt-2 w-40"
                        >
                            Your browser does not support the audio element.
                        </audio>
                        ) : (
                        <span className="text-[10px] text-gray-600 mt-2">
                            No preview available
                        </span>
                        )}
                    </div>
                    <div className="">
                        <button className="cursor-pointer"><img src="public/add.svg" alt="add button" className="w-5" /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}