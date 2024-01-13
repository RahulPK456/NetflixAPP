import React from 'react'
import "./Hero.css"
import axios from '../axio'
import { useEffect,useState } from 'react'
import { imageUrl, trending } from '../imageurl'
import Youtube from 'react-youtube'

function Hero() {
  const [movie, setMovie] = useState('')
  const [play, setPlay] = useState(null);
  useEffect(() => {
   axios.get(trending).then((response)=>{
 
     setMovie(response.data.results[13])
   })
  }, [])

  const click = (id) => {
    axios.get(trending).then((response) => {
      const selectedMovie = response.data.results.find((movie) => movie.id === id);
      setPlay(selectedMovie);
    });
  };

 const opts = {
  height: '500',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
  return (
    <div className='Hero' style={{backgroundImage:`URL(${movie?imageUrl+movie.backdrop_path:""})`}}>
         {play && <Youtube opts={opts} videoId={play.key} />}
        <div className='content'>
       
           <h1 className='title'>{movie?movie.title :"TRENDING #1"}</h1>
          
            <div className='butons'>
            
         
            <button className='button' onClick={() => click(movie.id)}>Play</button>
         
           <button className='button'>+Watchlist</button>
           </div>
           <h2 className='paragraph'>{movie?movie.overview:""}</h2>
           
        </div>
       
          
        <div className="fade"> </div>
        
    </div>
    
  )
}

export default Hero


