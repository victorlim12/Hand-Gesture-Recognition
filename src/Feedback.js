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
              Would you recommand this application?
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
              Please help us understand what can be improved in our product
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

              <br></br>

            <div style={style.stars}>
                {stars.map((_, index) =>{
                    return(
                            <FaStar
                            key={index}
                            size={24}
                            style={{
                                marginRight: 10,
                                cursor:"pointer"
                            }}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            />
                        )   
                    })}
                </div>

               

                <textarea
                    placeholder="Any other feedback?"
                    style={styles.textarea}
                />
                <Button variant="contained" Submit sx={{display:'flex'}}>
                    Submit
                </Button>
            
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