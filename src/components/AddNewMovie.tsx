import React, { FormEvent, useState } from "react";
import NavBar from "./NavBar";
import "../assets/css/add.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddNewMovie() {
  const homeNav = useNavigate();

  const [title,setTitle] = useState('');
  const [runtime,setRuntime] = useState('');
  const [year,setYear] = useState('');
  const [poster,setPoster] = useState('');
  
  const goSubmit = (e:FormEvent)=>{
e.preventDefault();

console.log("name--->"+title);
console.log("year--->"+year);
console.log("time--->"+runtime);
console.log("poster--->"+poster);

const nitMovie = [{ title,runtime,year,poster}];

axios.post("http://localhost:1234/nit/movies/add",nitMovie)
.then(()=>{
  homeNav("/all");
})



  }
  return (
    <div>
      <NavBar />
      <h2>ADD NEW Movie</h2>
      <div>
        <form onSubmit={goSubmit}>
          <div className="mb-3 divMargin">
            <label className="prop-label">Name</label>
            <input
              type="text"
              onChange={(e)=>setTitle(e.target.value)}
              className="prop-field"
              placeholder="enter Name of the Movie"
            />
          </div>
          <div className="mb-3">
            <label className="prop-label">MYear</label>
            <input
              type="text"
              onChange={(e)=>setYear(e.target.value)}
              className="prop-field"
              placeholder="enter Year"
            />
          </div>
          <div className="mb-3">
            <label className="prop-label">Mtime</label>
            <input
              type="text"
              onChange={(e)=>setRuntime(e.target.value)}
              className="prop-field"
              placeholder="enter time"
            />
          </div>
          <div className="mb-3">
            <label className="prop-label">Poster</label>
            <input
              type="text"
              onChange={(e)=>setPoster(e.target.value)}
              className="prop-field"
              placeholder="enter Poster"
            />
          </div>
          <div className="mb-3">
            <input
              type="submit"
              className="btn btn-primary addButton"
            value="Add"
            />
          </div>




        </form>
      </div>
    </div>
  );
}
