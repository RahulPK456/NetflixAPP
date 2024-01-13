import React from 'react'
import Youtube from 'react-youtube'
import { API_KEY_HERE } from '../constants'
import { useEffect,useState } from 'react'
import "./Footer.css"
import axios from "../axio"
import {imageUrl} from "../imageurl"

function Footer(props) {
  const [movies, setUrl] = useState([])
  const [urlId, setUrlId] = useState('')
  // const [moviesTitle, settitle] = useState('')
 
  useEffect(() => {
       axios.get(props.url).then((Response)=>{
        console.log(Response.data.results);
        setUrl(Response.data.results)
        
       })
  }, [])



  // useEffect(() => {
  //  axios.get(orginals).then((Response)=>{
  //   console.log(Response.data.results[0].name);
  //   settitle(Response.data.results[0])
  //  })
  // }, [])
  
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleclick= (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY_HERE}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
     setUrlId(response.data.results[0])}else{
      console.log("Trailer Not found");
     }

    })
  }
  return (
    <div className='posters'>
     
     <h2 className='categories'>{props.titles}</h2>
     <h3></h3>
         
    {urlId && <Youtube opts={opts} videoId={urlId.key}  />}
     <div className='movie-posters'>
 
      {movies.map((obj)=>
    <img onClick = {() =>handleclick(obj.id)} className={props.isSmall ? 'smallpost':'mpost'} src={`${imageUrl+obj.backdrop_path}`} />

      ) }
    
   
     </div>
    
    </div>
  )
}

export default Footer