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
                marginTop: 7,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                
            }}>
        
                <div className="homepage">
                    <Typography component="h1" variant="h8" >
                        About this Game
                     </Typography>
                     
                </div>
            </Box>
            <Box sx={{
                width:"100%",
                marginTop: 38,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}>
            <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Start the game 
              </Button>
        
        <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                href="/Ourteam"
              >
                Know more about our team
             </Button>
            </Box>
            
             
        </Container>
    )
}
export default About