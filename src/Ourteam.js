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

export default function Ourteam() {
//  const classes = useStyles();

  return (
    <Container  component="main" maxWidth="md">
                    <Typography component="h1" variant="h8" sx={{textAlign:"center"}} >
                        About our team
                     </Typography>
                    
            <Box
            sx={{
                width:'100%',
                marginTop: 5,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                
            }}>
          
            <Box>
                <Card sx={{maxWidth: 345}} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
            </Box>
            <Box>
                <Card sx={{maxWidth: 345}} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
            </Box>
            </Box>
        </Container>
  );
}

