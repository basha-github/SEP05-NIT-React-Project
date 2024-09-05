import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import AddNewMovie from './components/AddNewMovie'
import EditMovie from './components/EditMovie'
import AllMoviesList from './components/AllMoviesList'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Home from './components/Home'
import MovieDescription from './components/MovieDescription'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/add" element={<AddNewMovie />} />
<Route path="/edit" element={<EditMovie />} />
<Route path="/all" element={<AllMoviesList />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />
<Route path="/mDes" element={<MovieDescription />} />


</Routes>


</BrowserRouter>





    </div>
  )
}
