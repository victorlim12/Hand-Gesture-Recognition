import { style } from "@mui/system";
import React from "react";
import { FaStar } from "react-icons/fa";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from "@mui/material/TextField";
import { Rating, FormControlLabel, Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import Link from '@mui/material/Link';

const colors = {
    orange:"#FFBA5A",
    grey:"#a9a9a9"
}

function Feedback(){
    
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value =>{
        setCurrentValue(value)
    };
    
    const handleMouseOver = value =>{
        setHoverValue(value)
    }

    const handleMouseLeave = () =>{
        setHoverValue(undefined)
    }

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
                <div style={styles.container}>
                    <Typography component="h1" variant="h8" >
                    Feedback
                    </Typography>
                </div>
            </Box>
            <Box
                sx={{
                    width:"100%",
                    marginTop: 2,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    
                }}>
                    <Box sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',}}>
        <Typography variant="p" color="text.secondary" align="center">
            Were you able to complete all the gestures?
              </Typography>
              <RadioGroup name="use-radio-group" defaultValue="first">
            <FormControlLabel value="first" label="Yes" control={<Radio />} />
              <FormControlLabel value="second" label="No" control={<Radio />} />
            </RadioGroup>
            <TextField fullWidth
          required
          id="outlined-required"
          label="Reason"
          defaultValue=""
          size = "small"
        />


<br></br>

<Typography variant="p" color="text.secondary" align="center">
              Is there any improvement in your hand condition?
              </Typography>
              <RadioGroup name="use-radio-group" defaultValue="first">
            <FormControlLabel value="first" label="Yes" control={<Radio />} />
              <FormControlLabel value="second" label="No" control={<Radio />} />
            </RadioGroup>
            


<br></br>      

            <Typography variant="p" color="text.secondary" align="center">
              Please help us understand what can be improved on
              </Typography>   

              <RadioGroup name="use-radio-group" defaultValue="first">
            <FormControlLabel value="first" label="There are not enough gestures" control={<Radio />} />
              <FormControlLabel value="second" label="The gestures are too complicated" control={<Radio />} />
              <FormControlLabel value="third" label="The application isn't responsive enough" control={<Radio />} />
              <FormControlLabel value="fourth" label="The images displayed are unclear" control={<Radio />} />
              <FormControlLabel value="fifth" label="Others" control={<Radio />} />
            </RadioGroup>
            <TextField fullWidth
          required
          id="outlined-required"
          label="Please Specify"
          defaultValue=""
          size = "small"
        />
            
            </Box>

            <br></br>

            

            <Typography component="h2" variant="h8" >
                    How was your overall experience?
                    </Typography>
                    <Rating name="size-large" defaultValue={2} size="large" />
              <br></br>

                <Button variant="contained" href="Returnpage/" Submit sx={{display:'flex'}}>
                    Submit
                </Button>

                <br></br>
                <Copyright  sx={{ mt: 8, mb: 4 }} />           
            </Box>
        </Container>
    );
};

const styles = {
    container:{
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
    },
    textarea: {
        border:"1px solid #000000",
        borderRadius: 5,
        width: 450,
        margin:"20px 0",
        minHeight: 150,
        padding: 10,
    },
}
export default Feedback;