//import React from 'react'

export default function NavBar() {
    return (
      <div>
  <ul className="nav justify-content-end">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/home">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/add">AddNewMovie</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/all">AllMovies</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/about">AboutUs</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/contact">Contact</a>
    </li>
  </ul>
  
  
      </div>
    )
  }
  