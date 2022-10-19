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
    <Container  component="main" maxWidth="large">
                    <Typography component="h1" variant="h8" sx={{
                        marginTop: 5, 
                        textAlign:"center"}} >
                        About our team
                     </Typography>
                    
            <Box
            sx={{
                width:'100%',
                marginTop: 5,
                marginLeft:4,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                
            }}>
                <Box>
                    <Card sx={{
                        minWidth: 120}} >
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
                            Victor
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Group Leader!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth: 120}} >
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
                            DaoXian
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            2
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
            <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth: 120}} >
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
                            TanTian
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            3
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
            <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth: 120}} >
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
                            Wenhao
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            4
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth: 120}} >
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
                            Jessie
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            5
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth: 120}} >
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
                            Xinyao
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            6
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth: 120}} >
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
                            Yixin
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        7
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             </Box>
                <Box sx={{
                    width:"100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop:6
                }}>
                <Button
                    type="submit"
                    halfWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    href='/Level'
                >
                    Start the game 
                </Button>
                </Box>
            
        </Container>
  );
}

