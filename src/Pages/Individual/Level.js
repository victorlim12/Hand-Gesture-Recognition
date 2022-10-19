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
                        marginTop: 5, 
                        textAlign:"center"}} >
                        Choose your Category
                     </Typography>
                    
            <Box
            sx={{
                width:'100%',
                marginTop: 9,
                marginLeft:10,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                
            }}>
                <Box>
                    <Card sx={{
                        minWidth: 200}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
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
                        marginLeft: 6,
                        minWidth: 200}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
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
            <Box>
                    <Card sx={{
                        marginLeft: 6,
                        minWidth: 200}} >
                    <CardActionArea  href="/about">
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" sx={{
                            textAlign:"center"
                        }}>
                        Arm
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             </Box>
            
        </Container>
  );
}

