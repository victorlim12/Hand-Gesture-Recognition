import React from "react";
import Typography from "@mui/material/Typography";
import { Button,Box, Radio } from "@mui/material";
import { color } from "@mui/system";
import './Tar.css'
import Link from '@mui/material/Link';
import './finalpage.css'
import TextField from "@mui/material/TextField";
import { Rating, FormControlLabel } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';




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

export default function Resultpage(){
    return(
        <div>


<Box sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      
      }}>


            <Typography variant="h4" color="text.secondary" align="center">
              Your advise is very valuable to us!
              </Typography>



              <Typography variant="p" color="text.secondary" align="center">
              How was your experience?
              </Typography>

              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />


              <Typography variant="p" color="text.secondary" align="center">
              Please Share your feedback with us!
              </Typography>
              <br></br>
              <TextField 
          required
          id="outlined-required"
          label="Required"
          defaultValue=""
          size = "small"
        />
        <br></br>
        <Box sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',}}>
        <Typography variant="p" color="text.secondary" align="center">
              Would you recommand this application?
              </Typography>
              <RadioGroup name="use-radio-group" defaultValue="first">
            <FormControlLabel value="first" label="Yes" control={<Radio />} />
              <FormControlLabel value="second" label="No" control={<Radio />} />
            </RadioGroup>
            <TextField 
          required
          id="outlined-required"
          label="Reason"
          defaultValue=""
          size = "small"
        />

<br></br>

            <Typography variant="p" color="text.secondary" align="center">
              Please help us understand what can be improved in our product
              </Typography>   

              <RadioGroup name="use-radio-group" defaultValue="first">
            <FormControlLabel value="first" label="There are not enough gestures" control={<Radio />} />
              <FormControlLabel value="second" label="The gestures are too complicated" control={<Radio />} />
              <FormControlLabel value="third" label="The application isn't responsive enough" control={<Radio />} />
              <FormControlLabel value="fourth" label="The images displayed are unclear" control={<Radio />} />
              <FormControlLabel value="fifth" label="Others" control={<Radio />} />
            </RadioGroup>
            <TextField 
          required
          id="outlined-required"
          label="Please Specify"
          defaultValue=""
          size = "small"
        />
            
            </Box>


            <Button className="submit" variant="contained">Submit</Button>

            <Box sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      
      }}>
            <Copyright className="test5" sx={{ mt: 8, mb: 4 }} />

            </Box>
        </Box>


        </div>
    )
}
