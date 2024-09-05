import React, { FormEvent } from "react";
import NavBar from "./NavBar";
import "../assets/css/add.css";
import { useNavigate } from "react-router-dom";

export default function AddNewMovie() {
  const homeNav = useNavigate();
  
  const goSubmit = (e:FormEvent)=>{
e.preventDefault();

homeNav("/all");
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
