import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box} from "@mui/material";
import { color } from "@mui/system";
import './Tar.css'
import Link from '@mui/material/Link';


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

export default function FinalPage(){
    return(
      
        <div>
          
          <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
            <Typography variant="h4" color="text.secondary" align="center">
            Congratulations! Your personal report has been generated.
          </Typography>

            
            <p>You did a good job in these gestures!</p>

            <p>Level 1</p>

            <p>Level 2</p>

            <p>Level 3</p>

            <p>Level 1</p>

            <p>Level 2</p>

            <p>Level 3</p>


            <br></br>

            

            <Button  variant="contained">Give your feedback</Button>
            <br></br>
            <Button  variant="contained">Redo the unsuccessful gestures</Button>

  

            
            <Copyright  sx={{ mt: 8, mb: 4 }} />

            </Box>
        </div>
    )
}
