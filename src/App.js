import './App.css';
import React from 'react';
import Header from './Pages/Individual/Header';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from'./Pages/Individual/Homepage';
import About from'./Pages/Individual/About';
import Feedback from './Pages/Individual/Feedback';
import Login from './Pages/Individual/Loginpage';
import Level from './Pages/Training-page/camera_view';
import './Style/color.css'

function App(){
    return (
    <div className="App">
        <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} className="Page1"/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/Feedback" element={<Feedback />}/>
      </Routes>
      </BrowserRouter>
    </div>
      );
}

export default App;