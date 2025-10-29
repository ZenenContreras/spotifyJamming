import { useEffect } from 'react'
import {useState} from 'react'

function Search ({getTracks, setTracks}) {
    const [input, setInput] = useState('')

    async function handleSubmit (e){
        e.preventDefault()
        const results = await getTracks(input)
        setTracks(results)
    }


    return (
        <div>
            <form action="" className="flex flex-col items-center gap-6" onSubmit={handleSubmit}>
                <input type="text" id='songName' className="w-[300px] border-2 border-indigo-600 rounded-xl py-2 px-4 bg-amber-50" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Search Yours Favourites Songs'/>
                <input type="submit" value='Search' className="py-2 px-4 rounded-xl cursor-pointer bg-indigo-600 hover:bg-indigo-700 hover:scale-105 duration-100  text-amber-50 max-w-32" />
            </form>
        </div>
    )
}

export default Search; 