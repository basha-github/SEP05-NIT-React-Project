import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
interface NitMovie{
  id:number;
  title:string;
  runtime:string;
  year:string;
  poster:string;
}

export default function MovieDescription() {
  const id = useParams();
  const [movie,setMovie] = useState<NitMovie>();
  
  useEffect(()=>{
    const jObj = JSON.stringify(id);
  const jValue = JSON.parse(jObj).id;
  axios.get<NitMovie>("http://localhost:1234/nit/movies/get?id="+jValue)
  .then(res=>{
    console.log("res--->"+res.data);
    
    setMovie(res.data)
  
  })
  },[]);
  return (
    <div>
         <NavBar />
        MovieDescription



<div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
            src={movie?.poster}
            className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Title:{movie?.title}</h5>
              <p className="card-text">Runtime:{movie?.runtime}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Year:{movie?.year}
                  </small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
