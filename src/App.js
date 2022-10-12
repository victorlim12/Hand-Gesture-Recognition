import './App.css';
import React from 'react';
import Header from './Header';
import { AodOutlined } from '@mui/icons-material';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from'./Homepage';
import About from'./About';
import Feedback from './Feedback';
import Login from './Pages/Login/Loginpage';
import { AodOutlined } from '@mui/icons-material';
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App(){
    return (
    <div className="App">
        <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/Feedback" element={<Feedback />}/>
      </Routes>
      </BrowserRouter>
    </div>
      );
}

export default App;