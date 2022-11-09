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
import fist from '../../Images/fist.jpeg';
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
                marginLeft:3,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                
            }}>
                <Box>
                    <Card sx={{
                        minWidth:150,
                        maxWidth: 150,
                        height:250}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"                       
                        height="140"
                        image= {fist}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Victor
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Group Leader! Backend Team
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth:150,
                        maxWidth: 150,
                        height:250}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLyl0h-R6272OWGz6CbxhW9cg5CmktrY_BA&usqp=CAU"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            DaoXian
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Backend Team
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
            <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth:150,
                        maxWidth: 150,
                        height:250}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXP2cXwXvA7NF8oZ06AMYtvP2Gn-Qc9HwEQ&usqp=CAU"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            TanTian
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Backend Team
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
            <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth:150,
                        maxWidth: 150,
                        height:250}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYX38f91o7sowo_9V7LJF5GWUawBIcrB8aNg&usqp=CAU"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jessie
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Backend Team
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth:150,
                        maxWidth: 150,
                        height:250}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image=""
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Wenhao
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Frontend Team
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth:150,
                        maxWidth: 150,
                        height:250}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ocaEs6IIXNodnkbqT6sKmARWinCkeL704w&usqp=CAU"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Xinyao
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Group Teasure Frontend Team
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 3,
                        minWidth:150,
                        maxWidth: 150,
                        height:250}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"

                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQu4Jwknm8NWmlCj3MPw6bLdsXvAsIFx9kA&usqp=CAU"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Yixin
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Frontend Team
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
                    href='/Training'
                >
                    Start the Training 
                </Button>
                </Box>
            
        </Container>
  );
}

