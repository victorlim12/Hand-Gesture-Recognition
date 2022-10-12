import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CenterFocusStrong, Margin, Stream } from '@mui/icons-material';

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
              >
                Know more about our team
              </Button>
            </Box>
            
             
        </Container>
    )
}
export default About