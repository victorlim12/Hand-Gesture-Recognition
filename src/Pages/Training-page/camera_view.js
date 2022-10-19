import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useRef, useEffect, useState, useContext} from 'react';

import Webcams from '../../Components/Webcam';
import { AppContext } from '../../Config/Provider';
import { Handconf } from '../../Config/Training';


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

export default function Level() {
  let [done, setDone] = useContext(AppContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  
  const [count,setCount] = useState(0)
    function updateCount(){
      setCount(count+1)
    }
    
  const gestureDesc = ['how to do this gesture. The thumbs-up emoji is used to express assent, approval, or encouragement in digital communications, especially in Western cultures.','HAHA','third gesture']
  const gestureImg = ['https://picsum.photos/id/10/200/300','https://picsum.photos/id/1008/200/300','https://picsum.photos/id/1/200/300']



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box sx={{display: 'flex'}}>
          <Box
            sx={{
              marginTop: '3%',
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: 'center ',
              width: '50%',
            }}
          >
            <Typography component="h1" variant="h3" >
              Gesture information
            </Typography>
            <Typography component="h2" variant="h8">
              {Handconf[done]} {done}
            </Typography>
            <img src={gestureImg[count]} alt="" width={250} height={250}  />
            <Typography component="p" variant="h6" >
              {gestureDesc[count]}
            </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Gesture practice: {count+1}/5
              </Button>
          </Box>
          <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '50%'
              }}
          >
            <Box
              sx={{ 
                marginTop: '3%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '50%',
                  }}>
              <Typography component="h1" variant="h3" mb={'5%'} > Camera view</Typography>
                  <Webcams 
                  gesture= {Handconf[done]}
                  />
              <Button
                onClick={updateCount}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next gesture 
              </Button>
        <Box>
                
        </Box>
        <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Restart this gesture
              </Button>
                
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}