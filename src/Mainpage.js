import React from 'react'
import './App.css'
import Row from './Row'
import requests from './request'


const Mainpage = ()=> {
    return (
        
       <div className="main">
       <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
       <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
       </div>
    )
}

export default Mainpage
