import React from "react";
import NavBar from "./NavBar";
import "../assets/css/add.css";
import { useNavigate } from "react-router-dom";

export default function EditMovie() {
const myNav = useNavigate();
const goDelete =()=>{

  myNav("/all");
}

const goSave = ()=>{
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
              className="prop-field"
              placeholder="enter Name of the Movie"
            />
          </div>
          <div className="mb-3">
            <label className="prop-label">MYear</label>
            <input
              type="text"
              className="prop-field"
              placeholder="enter Year"
            />
          </div>
          <div className="mb-3">
            <label className="prop-label">Mtime</label>
            <input
              type="text"
              className="prop-field"
              placeholder="enter time"
            />
          </div>
          <div className="mb-3">
            <label className="prop-label">Poster</label>
            <input
              type="text"
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
