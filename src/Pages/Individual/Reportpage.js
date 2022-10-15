import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
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

export default function Tar(){
    return(
        <div>
  
            <Typography variant="h4" color="text.secondary" align="center">
            Congratulations! Your personal report has been generated.
          </Typography>

            
            <p className="test">You did a good job in these gestures!</p>

            <p className="test6">Level 1</p>

            <p className="test7">Level 2</p>

            <p className="test8">Level 3</p>

            <p className="test9">Level 1</p>

            <p className="test10">Level 2</p>

            <p className="test11">Level 3</p>

            <p className="test2">You were unsuccessful in these gestures!</p>

            

            <Button className="test3" variant="contained">Give your feedback</Button>
            <Button className="test4" variant="contained">Redo the unsuccessful gestures</Button>

  

            
            <Copyright className="test5" sx={{ mt: 8, mb: 4 }} />


        </div>
    )
}
