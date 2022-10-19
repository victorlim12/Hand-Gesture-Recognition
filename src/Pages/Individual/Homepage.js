import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../../Style/color.css'

export default function Homepage() {
    const test= "Child"
    return(
        <Container component="main" maxWidth="md" sx={{height: '100vh'}}>
            <Box
            sx={{
                width:'100vh',
                marginTop: '15%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
        
                <div className="homepage">
                    <Typography component="h1" variant="h1" sx={{fontWeight: 500}} >
                        Welcome, <span className='blue'>{test}</span>
                     </Typography>
                </div>
            </Box>
            <Box
            sx={{
                width:'100%',
                marginTop: 5,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                
            }}>
                <Typography component="h4" variant="h5" sx={{fontWeight: 300}}>
                  We provide assistance and ease to neurological patients with disabled hands
                </Typography>
            </Box>
            <Box sx={{
                width:'100%',
                marginTop: '5%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
              <Button variant="contained" size='large' href="/about"
              sx={{display:'flex', minWidth:'10rem', minHeight:'3rem', borderRadius: '25px'}}>
                  start
               </Button>
            </Box>
        </Container>
    )
}