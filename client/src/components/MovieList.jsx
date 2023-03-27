

import axios from 'axios'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';




const MovieList = () => {

    const [list, setList] = useState([])



//Displays movie title to the screen
    useEffect(() => {
        //Makes a request to the server to grab data
        axios.get('http://localhost:8000/api/getAllMovies') //Make request
          .then((res) => {
            console.log(res);
            setList(res.data.movies);
          }).catch((err) => {
            console.log(err);
          });
      }, []);

      return (
          <div>
           
            {
              list.map((movie,index) =>
              (
              <div key={index}>
              
              <Link to={`/onemovie/${movie._id}`}>{movie.title}</Link>
              <img className="rounded mx-auto d-block" src={movie.boxArt}/>
             
              </div>
              ))
            }
          
          </div>
  )
}

export default MovieList