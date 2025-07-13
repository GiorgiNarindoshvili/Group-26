import { useState } from 'react'
import React from 'react'
import MovieCard from './components/MovieCard'
const movs = [
    {
        id: 1,
        title: 'Inception',
        poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH&psig=AOvVaw1UTn3AJMtTvM62z83bzENU&ust=1752407604411000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMiGlJmht44DFQAAAAAdAAAAABAE",
        description: 'A mind-bending thriller about dreams.',
        genre: 'Sci-Fi',
        releaseDate: '2010',
        rating: '8.8',
    },
    {
        id: 2,
        title: 'The Matrix',
        poster: 'https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg',
        description: 'A hacker discovers the reality is a simulation.',
        genre: 'Action',
        releaseDate: '1999',
        rating: '8.7',
    },
    {
        id: 3,
        title: 'Interstellar',
        poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
        description: 'A space mission to save humanity.',
        genre: 'Adventure',
        releaseDate: '2014',
        rating: '8.6',
    }
]
const App = () => {
  const[search, setSearch] = useState('')
  const filterMovies = movs.filter((movie) => movie.title.toLowerCase().includes(search.toLocaleLowerCase()))
  
  
  return(
    <div style={ {padding:"20px"} }>
        <h1>Movie Gallery</h1>
        <input type="text" placeholder='Search Movies' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <div>
            {filterMovies.map((movie) => (
                <MovieCard key={movs.id}{...movie}/>
            ))}
        </div>
    </div>
  )
}

export default App
