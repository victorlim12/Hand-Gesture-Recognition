import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box} from "@mui/material";
import { color } from "@mui/system";
import './Tar.css'
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { style } from "@mui/system";

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

  export default function Returnpage(){
    return(

            <Box
                sx={{
                    width:"100%",
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    
                }}>
                <div>
                    <Typography component="h1" variant="h3" >
                    Thank You For Your Feedback!
                    </Typography>

                    <br></br>

                    <Box
                sx={{
                    width:"100%",
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    
                }}>
                    <Button variant="contained" size="large" href="homepage/">Return to homepage</Button>
                    <br></br>
                </Box>

                <Box
                sx={{
                    width:"100%",
                    marginTop: 5,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    
                }}>
                    <Copyright  sx={{ mt: 8, mb: 4 }} />

                    </Box>

                </div>

            </Box>
        


    )
}
