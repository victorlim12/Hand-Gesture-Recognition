import './App.css';
import React from 'react';
import Header from './Pages/Individual/Header';
import { AppProvider } from './Config/Provider';

import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from'./Pages/Individual/Homepage';
import About from'./Pages/Individual/About';
import Feedback from './Pages/Individual/Feedback';
import Login from './Pages/Individual/Loginpage';
import Level from './Pages/Training-page/camera_view';
import './Style/color.css';
import Ourteam from './Pages/Individual/Ourteam';
import Category from './Pages/Individual/Level';
import UnityGame from './Pages/Individual/Unity';
import Reportpage from './Pages/Individual/Reportpage';
import Feedbackend from './Pages/Individual/Feedbackend';
import Returnpage from './Pages/Individual/returnpage';
function App(){

    return (
    <div className="App">
      <AppProvider>
        <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} className="Page1"/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Feedback" element={<Feedback />}/>
        <Route path='/Training' element={<Level/>}/>
        <Route path="/Ourteam" element={<Ourteam />}/>
        <Route path="/Level" element={<Category />}/>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Unity" element={<UnityGame />} />
        <Route path="/Reportpage" element={<Reportpage />} />
        <Route path="/Feedbackend" element={<Feedbackend />} />
        <Route path="/Returnpage" element={<Returnpage />} />
      </Routes>
      </BrowserRouter>
      </AppProvider>
    </div>
      );
}

export default App;