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
import './displaypage.css';







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


const Item = styled(Paper)(({ theme }) => ({
 
    color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,


  }));



 export default function Displaypage(){
    return(
      
        <div classname = "Displaypage">


<Box sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
      }}>







<Box sx={{
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 10,
      
      }}>


<Box component="span" sx={{ width: 200,
    height: 400, border: '1px solid grey',
    marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'primary.main'

       
    
    }}>

<h2>Score System</h2>
<br></br>
<h3>Correct Gestures:</h3>
<br></br>
<br></br>
<h3>Personal Best:</h3>



      
</Box>


</Box>


<Box sx={{
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 19,
      
      }}>

<Box component="span" sx={{ width: 200,
    height: 400, border: '1px solid grey',
    marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'warning.main'
        }}>
    
    <h2>Time Taken</h2>
    <br></br>
    <h3>Current Time:</h3>
    <br></br>
    <br></br>
    <h3>Personal Best:</h3>


</Box>

</Box>

<Box sx={{
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 20,
      
      }}>

<Box component="span" sx={{ 
    width: 200,
    height: 400, 
    border: '1px solid grey',
    marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'success.main'
    
    
    
    }}>
 
 <h3>Attention:</h3>
 <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
 <br></br>
 <h3>Working Memory:</h3>
 <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
 <br></br>
 <h3>Inhibilitory Control:</h3>
 <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
  
</Box>

</Box>



       
</Box>


<Box sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      
      }}>

<Button variant="contained">Give your feedback</Button>
<br></br>
<Button variant="contained">Redo the unsuccessful gestures</Button>

<Copyright  sx={{ mt: 8, mb: 4 }} />

</Box>

        </div>
    )
}