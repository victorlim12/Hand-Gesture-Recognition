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
import Timer from '../../Components/timer';
import { AppContext } from '../../Config/Provider';
import { Handconf } from '../../Config/Training';
import like from '../../Images/like.jpeg';
import fist from '../../Images/fist.jpeg';
import palm from '../../Images/palm.jpeg';
import peace from '../../Images/peace.jpeg';
import one from '../../Images/one.jpeg';
import three from '../../Images/three.jpeg';
import four from '../../Images/four.jpeg';
import call from '../../Images/call.jpeg';
import peaceinverted from '../../Images/peaceinverted.jpeg';
import dislike from '../../Images/dislike.jpeg';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="left" {...props}>
      {'Copyright  '}
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('event',event)
  //   const data = new FormData(event.currentTarget);
  //   console.log('data',data)
  //   localStorage.setItem('Average time', data.get());
  //   // window.location.href =  '/report'
  // };
  
 
    
  const gestureDesc = [' ']
  const gestureImg = [like,peace,one,three,four,palm,call,fist,peaceinverted, dislike]
  localStorage.setItem('totalgesture', done+1)


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
              {Handconf[done]} 
            </Typography>
            < img src={gestureImg[done]} alt="" width={300} height={250}  />
            <Typography component="p" variant="h6" >
              {gestureDesc[done]}
            </Typography>
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: '25px'}}
              >
                Gesture practice: {done+1}/10
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
              <Typography component="h3" variant="h3" mb={'5%'} > Camera view</Typography>
                  <Webcams 
                  gesture= {Handconf[done]}
                  />
              
              {/* <Button
                onClick={updateCount}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next gesture 
              </Button> */}
        <Box>
        <Timer startCount="0"/>   
        </Box>
        
              {/* <Button
                // onClick={handleSubmit}
                type="submit"
                variant="contained"
                sx={{ mt: 0.5, mb: 2 }}
              >
                Generate report
              </Button> */}
                
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}