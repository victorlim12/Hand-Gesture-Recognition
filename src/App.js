import SignIn from './Pages/Login/Loginpage';
import './App.css';
import Level from './Pages/Login/camera_view';
import Login from './Pages/Login/Loginpage';
import { AodOutlined } from '@mui/icons-material';
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter >
      
      <Routes>
        <Route path="/Pages/Login/camera_view" element={<camera_view />}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    );
  
  
}

export default App;
