import React from 'react'
import  { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const OneMovie = () => {

const[movie, setMovie] = useState({})
const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getOneMovie/${id}`)
        .then((res)=>{
           
            
            setMovie(res.data)
            console.log(movie);
        }).catch((err)=>{
            console.log(err)
        })


    },[])

  
  
    return (
    <div>
<h1>{movie.title}</h1>
<h1>{movie.rating}</h1>
<h1>{movie.boxOffice}</h1>
</div>
  )
}

export default OneMovie