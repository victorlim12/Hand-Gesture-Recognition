import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { color } from "@mui/system";
import './Tar.css'
import Link from '@mui/material/Link';
import './finalpage.css'
import TextField from "@mui/material/TextField";

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
              Your advise is very valuable to us!
              </Typography>

              <TextField classname="feedback1" label="Outlined" variant="outlined" />
            
            <Button className="submit" variant="contained">Submit</Button>

            
            <Copyright className="test5" sx={{ mt: 8, mb: 4 }} />


        </div>
    )
}
