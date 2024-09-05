import React from 'react'
import NavBar from './NavBar'

export default function MovieDescription() {
  return (
    <div>
         <NavBar />
        MovieDescription



<div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
            src="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
             className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">Runtime:</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Year:
                  </small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
