import './App.css';
import React from 'react';
import Header from './Header';
import { AodOutlined } from '@mui/icons-material';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from'./Homepage';
import About from'./About';
import Feedback from './Feedback';
<<<<<<< HEAD
import Test2 from './Ourteam';
=======
import Login from './Pages/Login/Loginpage';
import { AodOutlined } from '@mui/icons-material';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
>>>>>>> origin

function App(){
    return (
    <div className="App">
      <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/Feedback" element={<Feedback />}/>
        <Route path="/Ourteam" element={<Test2 />}/>
      </Routes>
      </BrowserRouter>

    </div>
      );
}

export default App;