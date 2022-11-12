import React from "react";
import Typography from "@mui/material/Typography";
import { Button, Box} from "@mui/material";
import { color } from "@mui/system";
import './Tar.css'
import Link from '@mui/material/Link';
import { Color } from "@mui/material";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import ReactDOM from "react-dom";
import '../../Style/displaypage.css';
import {Container} from '@mui/material';
import Feedbackend from './Feedbackend';





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


const Item = styled(Paper)(({ theme }) => ({
 
    color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,


  }));



 export default function Displaypage(){
    const totaltime = localStorage.getItem('totaltime')
    return(
      
        <div classname = "Displaypage">

<Container component="main" maxWidth="large">


<Box sx={{
        marginTop: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 28,
     
      }}>


<Box component="main" sx={{ width: 280,
    height: 350, 
    marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'rgb(219, 226, 239)',
        borderRadius: '25px'
    }}>

<Typography component="h5" variant="h5" sx={{mt:10}}>
  {/* Score System */}
  </Typography>

<Typography component="h5" variant="h5">
  <b>Total</b>
  </Typography>
  <br></br>
  <Typography component="h5" variant="h5">
  <b>Gestures Completed :</b>
  </Typography>
  <br></br>
  <br></br>
  <Typography component="h5" variant="h4" >
    3
    </Typography>
</Box>


<Box sx={{
        marginTop: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
      
      }}>

<Box component="main" sx={{ width: 280,
    height: 350, 
    marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'rgb(219, 226, 239)',
        borderRadius: '25px'
        }}>
    
    <Typography component="h10" variant="h4" sx={{mt:3}}>
      {/* Time Taken */}
      </Typography>
    <br></br>
    <br></br>
    <Typography component="h5" variant="h5" >
      <b>Total time taken :</b>
      </Typography>
      <br></br>
     <Typography component="h5" variant="h5" >
       {totaltime} seconds
     </Typography>
     <br></br>
    <Typography component="h5" variant="h5" >
      <b>Average time taken :</b>
      </Typography>
      <br></br>
    <Typography component="h5" variant="h5" >
       {parseInt(totaltime/3)} seconds
     </Typography>


</Box>

</Box>





       
</Box>
</Container>

<Box sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      
      }}>

<Button variant="contained" href="/Feedbackend" sx={{borderRadius: '25px'}}>
  Give your feedback</Button>
<br></br>


<Copyright  sx={{ mt: 8, mb: 4 }} />

</Box>

        </div>
    )
}