import React from 'react';
import { makeStyles } from '@mui/material';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import {CardActionArea} from '@mui/material';
import {CardActions} from '@mui/material';
import {CardContent} from '@mui/material';
import {CardMedia} from '@mui/material';
import {Button} from '@mui/material';
import {Container} from '@mui/material';
import {Box} from '@mui/material';
import { minHeight } from '@mui/system';

// const useStyles = makeStyles({
//   root: {
//      maxWidth: 345,
//    },
// });

export default function Level() {
//  const classes = useStyles();

  return (
    <Container  component="main" maxWidth="md">
                    <Typography component="h1" variant="h8" sx={{
                        marginTop: 10, 
                        textAlign:"center"}} >
                        Choose your Category
                     </Typography>
                    
            <Box
            sx={{
                width:'100%',
                marginTop: 9,
                marginLeft:17,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                
            }}>
                <Box>
                    <Card sx={{
                        minWidth: 200
                        }} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://media.istockphoto.com/photos/hand-picture-id173648736?k=20&m=173648736&s=612x612&w=0&h=77BBXyunFP3cppRUOO1ydrjdaDzwk8AqErCyz5f_s2A="
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2"sx={{
                            textAlign:"center"
                        }}>
                            Palm
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 15,
                        maxWidth: 250}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image="https://media.istockphoto.com/photos/elegant-female-hand-on-a-white-background-in-isolation-picture-id467128804?k=20&m=467128804&s=612x612&w=0&h=lqh3W4xwvL7JbYek6xHppdmWena5FTYPhX_Emy9ntts="
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2"sx={{
                            textAlign:"center"
                        }}>
                        Wrist
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             </Box>
            
        </Container>
  );
}