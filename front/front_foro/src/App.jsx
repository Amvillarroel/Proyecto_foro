import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home';
import Details from './components/Details';



function App() {

  return (
   <Router>
   <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/details" element={<Details />} />
    </Routes>
    </Router>
  )
}

export default App
