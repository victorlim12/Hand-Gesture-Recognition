import './App.css';
import React from 'react';
import Header from './Header';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from'./Homepage';
import About from'./About';
import Feedback from './Feedback';
import Login from './Pages/Login/Loginpage';
import FinalPage from './extrapage';
import Resultpage from './resultpage';
import Displaypage from './displaypage';





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
        <Route path="/FinalPage" element={<FinalPage/>}/>
        <Route path="/resultpage" element={<Resultpage/>}/>
        <Route path="/displaypage" element={<Displaypage/>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
      );
}

export default App;