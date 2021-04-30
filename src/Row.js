import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css'
import { FaHeart } from "react-icons/fa";
import { EmailIcon,FacebookIcon,LinkedinIcon, WhatsappIcon} from "react-share";


const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl}) {
    const [movies, setMovies] = useState([])
    const [favmovie, SetFavMovie] = useState([])
    const [popup, SetPopup] = useState(false)
    
    const Popup = (props) => {
        return ( props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                    {props.children}
                </div>
            </div>
        ):"";
        
    }

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favmovie, movie]
        SetFavMovie(newFavouriteList)
       
    }

    const Wishlist = ({name}) => {
        
        return (
            <div className="row_m">
            <h2 style={{fontFamily:"sans-serif", color:"#F9966B", fontSize:"20px"}}>Your {name} Wishlist <FaHeart/></h2>
            
            <div className="row_posters">
               {favmovie.map(movie => (
                   <div>
                   <img 
                   key={movie.id}
                   className={"row_poster"}
                   src={`${base_url}${movie.backdrop_path}`} 
                   alt={movie.name}/>
                   </div>
                
                ))}
            </div>
            <div>
         </div>
            
        </div>
    
        )
    }
    

    const SharingMovie = () => {
        return (
            <div className="row_social">
            <div className="row" >
                    <div className="col-3" style={{textAlign:"center"}}><LinkedinIcon size={22} round={true} onClick={() => SetPopup(true)}/></div>
                    <div className="col-3" style={{textAlign:"center"}}><FacebookIcon size={22} round={true} onClick={() => SetPopup(true)}/></div>
                    <div className="col-3" style={{textAlign:"center"}}><EmailIcon size={22} round={true} onClick={() => SetPopup(true)}/></div>
                    <div className="col-3" style={{textAlign:"center"}}><WhatsappIcon size={22} round={true} onClick={() => SetPopup(true)}/></div>
            </div> 
            </div>
        )
    }


   useEffect(() => {

     async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
     }
     fetchData();

   }, [fetchUrl])      

   
   
    return (
        <div className="row_m">
            <h2>{title}</h2>
            
            <div className="row_posters">
               {movies.map(movie => (
                   <div>
                   <img 
                   key={movie.id}
                   className={"row_poster"}
                   onDoubleClick={() => addFavouriteMovie(movie)}
                   src={`${base_url}${movie.backdrop_path}`} 
                   alt={movie.name}/>
                   <SharingMovie/>
                   </div>
                
                ))}
            </div>
            <Wishlist name={title}/>
              <Popup trigger={popup} setTrigger={SetPopup}>
                 <h3>Share Here!</h3>
                 <p>You can share this movie with anyone :)</p>
              </Popup>
            <div>
         </div>
            
        </div>

    ) 
}

export default Row;
