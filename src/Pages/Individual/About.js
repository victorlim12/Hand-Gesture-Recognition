import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const About=()=>{
    return(
        <Container  component="main" maxWidth="md">
            <Box
            sx={{
                width:"100%",
                marginTop: '12%',
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: 'center  '
            }}>
        
                    <Typography component="h1" variant="h2" sx={{fontWeight: 1000, mb: '3%'}} >
                        About this Game
                     </Typography>
                     <Button
                 variant="contained" size='large' 
                 sx={{display:'flex', minWidth:'10rem', minHeight:'3rem', borderRadius: '25px', mb: '2%'}}
              >
                Ready to Practice ? 
              </Button>

              <Button
            variant="contained" size='large' 
               sx={{display:'flex', minWidth:'10rem', minHeight:'3rem', borderRadius: '25px'}}
              >
                Know more about our team
              </Button>
               
            </Box>
             
        </Container>
    )
}
export default About