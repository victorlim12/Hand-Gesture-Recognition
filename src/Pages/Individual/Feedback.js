import { style } from "@mui/system";
import React from "react";
import { FaStar } from "react-icons/fa";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


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
                    placeholder="What's your feedback?"
                    style={styles.textarea}
                />
                <Button variant="contained" Submit sx={{display:'flex', minWidth:'7rem', minHeight:'2rem',mt:3, borderRadius: '25px'}}>
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