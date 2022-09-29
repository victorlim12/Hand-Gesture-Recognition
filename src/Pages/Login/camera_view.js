import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Margin, Stream } from '@mui/icons-material';
import thrumb_up from './thrumb_up.jpeg'; 
import {useRef, useEffect, useState} from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="left" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function App(){
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto]= useState(false);

  const getVideo=()=>{
    navigator.mediaDevices
      .getUserMedia({
        video:{width:450, height:400}
      })
      .then(Stream=>{
        let video=videoRef.current;
        video.srcObject=Stream;
        video.play();
      })
      .catch(err=>{
        console.error(err);
      })
  }
  useEffect(()=>{
    getVideo();
  },[videoRef]);
  return(
    <div className='App'>
      <div className='camera'>
        <video ref={videoRef}></video>
        <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next gesture 
              </Button>
        <Box>
                
        </Box>
        <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Restart this gesture
              </Button>
      </div>
      
    </div>
  )
  

}

export default function Level() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        
        <CssBaseline />
        <Box  sx={{display: 'flex'}}>
          <Box
            sx={{
              marginTop: 8,
              //marginLeft: 5,
            
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              width: '50%'
            }}
            
          >
            
            <Typography component="h1" variant="h8" >
              Gesture information
            </Typography>
            <Typography component="h2" variant="h8">
              Thumb up
            </Typography>
            <Typography component="h3" variant="h5" >
            how to do this gesture. The thumbs-up emoji is used to express assent, approval, or encouragement in digital communications, especially in Western cultures.
            </Typography>
            
            <img src={thrumb_up} alt="thrumb_up" width={250} height={250}  />
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Gesture practice: 2/5
              </Button>
              
              
            </Box>
          </Box>
          
          <Box
              sx={{
                marginTop: 8,
                //marginLeft: 5,
              
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '50%'
              }}
            
          >
            <Typography component="h1" variant="h8" >
              Camera view
            </Typography>
            <Box
              sx={{ 
                marginTop: 5,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '50%'
                  }}>
              <App/>
                
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}