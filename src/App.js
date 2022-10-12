import './App.css';
import React from 'react';
import Header from './Header';
import { AodOutlined } from '@mui/icons-material';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from'./Homepage';
import About from'./About';
import Feedback from './Feedback';
import Login from './Pages/Login/Loginpage';
import Level from './Pages/Login/camera_view';

function App(){
    return (
    <div className="App">
        <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Feedback" element={<Feedback />}/>
        <Route path="/pages/login/camera_view" element={<Level />}/>
      </Routes>
      </BrowserRouter>
    </div>
      );
}

export default App;