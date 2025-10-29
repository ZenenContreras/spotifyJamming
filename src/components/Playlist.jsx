import { useState } from "react"

export default function Playlist ({playlist, handleRemoveButton}) {
    const [playlistName, setPlaylistName] = useState('')

    return (
        <div className="flex flex-col p-4 bg-[#1e1e3a] rounded-xl gap-4">
            <h1 className="text-2xl font-bold text-amber-50">Added To the playlist</h1>
            <hr className="text-white "/>

            <form  className="flex gap-2">
                <input className='w-full border border-amber-100 py-2 px-4 rounded-xl text-amber-100' placeholder='Playlist Name' id='PlayListName' type="text" value={playlistName} onChange={(e)=>setPlaylistName(e.target.value)} />
            </form>

            {playlist.length === 0 && (
                <div className="h-100">
                    <h1 className="text-amber-50 text-lg">No hay nada en tus playlist</h1>
                </div>
            )}
            {playlist.map(track => (
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
                    </div>

                    <button className="cursor-pointer px-4 hover:scale-110 duration-100" onClick={() => handleRemoveButton(track)}><img src="public/remove.svg" alt="remove button" className="w-5" /></button>

                </div>
            ))}

            <button onClick={()=> handleAddToSpotify()} className="py-2 px-4 rounded-xl cursor-pointer bg-indigo-600 hover:bg-indigo-700 hover:scale-105 duration-100 text-amber-50">Ad Playlist To spotify</button>
        </div>
    )
}