import { useState } from 'react'
import Search from './components/Search'
import getTracks from './services/search'
import Tracks from './components/Tracks'

function App() {
  const [tracks, setTracks] = useState([])

  function handleAddButton (name, id){
    console.log('Añadido a favoritos: \n', 'Nombre: ', name, '\n Id: ', id)
  }

  console.log(tracks)

  return (
    <div className='bg-purple-900 h-screen flex items-center flex-col gap-12'>
      <div className='py-7 flex flex-col items-center gap-12 bg-[#111344] w-full '> 
          <h1 className='font-bold text-5xl text-indigo-600 '>Spotify Jamming</h1>
      </div>
      <Search getTracks={getTracks} setTracks={setTracks}/>
      <div className='flex flex-row gap-4'> 
        <Tracks tracks={tracks} handleAddButton={handleAddButton}/>
        
      </div>
    </div>
  )
}

export default App
