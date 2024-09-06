import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../assets/css/add.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


interface NitMovie{
  id:number;
  title:string;
  runtime:string;
  year:string;
  poster:string;
}


export default function EditMovie() {
const myNav = useNavigate();
const id = useParams();
const [movie,setMovie] = useState<NitMovie>();


const [title,setTitle] = useState('');
  const [runtime,setRuntime] = useState('');
  const [year,setYear] = useState('');
  const [poster,setPoster] = useState('');
  


useEffect(()=>{
  const jObj = JSON.stringify(id);
const jValue = JSON.parse(jObj).id;
axios.get<NitMovie>("http://localhost:1234/nit/movies/get?id="+jValue)
.then(res=>{
  console.log("res--->"+res.data);
  
  setMovie(res.data)
  
  setTitle(res.data.title);
  setRuntime(res.data.runtime);
  setYear(res.data.year);
  setPoster(res.data.poster);
})
},[]);

const goDelete =()=>{
  console.log("delete is called...");
  const jObj = JSON.stringify(id);
const jValue = JSON.parse(jObj).id;
axios.delete("http://localhost:1234/nit/movies/delete?id="+jValue)
.then(res=>{
  myNav("/all");
})
  
}
const nitMovie = {id,title,runtime,year,poster};

const goSave = ()=>{
  axios.put("http://localhost:1234/nit/movies/update",nitMovie)
  myNav("/all");
}

  return (
    <div>
      <NavBar />
      <h2>Edit Movie</h2>
      <div>
        <form>
          <div className="mb-3 divMargin">
            <label className="prop-label">Name</label>
            <input
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="prop-field"
              placeholder="enter Name of the Movie"
            />
          </div>
          <div className="mb-3">
            <label className="prop-label">MYear</label>
            <input
              type="text"
              value={year}
              onChange={(e)=>setYear(e.target.value)}
              className="prop-field"
              placeholder="enter Year"
            />
          </div>
          <div className="mb-3">
            <label className="prop-label">Mtime</label>
            <input
              type="text"
              value={runtime}
              onChange={(e)=>setRuntime(e.target.value)}
              className="prop-field"
              placeholder="enter time"
            />
          </div>
          <div className="mb-3">
            <label className="prop-label">Poster</label>
            <input
              type="text"
              value={poster}
              onChange={(e)=>setPoster(e.target.value)}
              className="prop-field"
              placeholder="enter Poster"
            />
          </div>
          <div className="mb-3">
          <button 
              onClick={goSave}
              type="button" 
              className="btn btn-info">Save</button>
            <button 
              onClick={goDelete}
              type="button" 
              className="btn btn-danger">Delete</button>
          </div>

          




        </form>
      </div>
    </div>
  );
}