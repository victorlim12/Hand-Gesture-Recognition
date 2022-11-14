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
import xinyao from '../../Images/xinyao.jpeg';
import tantian from '../../Images/tantian.jpeg';
import yixin from '../../Images/yixin.jpeg';
import wenhao from '../../Images/wenhao.jpeg';
import jessie from '../../Images/jessie.jpeg';
import victor from '../../Images/victor.jpeg';
import daoxian from '../../Images/daoxian.jpeg';
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
                marginLeft:1,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                
            }}>
                <Box>
                    <Card sx={{
                        minWidth:150,
                        maxWidth: 160,
                        height:260}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"                       
                        height="140"
                        image= {victor}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Victor
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Group Leader! Backend Team
                            <br></br>
                            <Typography gutterBottom variant="h9" component="h6">
                            vict0024@e.ntu.edu.sg
                         </Typography>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 2,
                        minWidth:150,
                        maxWidth: 160,
                        height:260}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={daoxian}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            DaoXian
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Backend Team
                        <br></br>
                        <Typography gutterBottom variant="h9" component="h6">
                            ding0137@e.ntu.edu.sg
                         </Typography>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
            <Box>
                    <Card sx={{
                        marginLeft: 2,
                        minWidth:150,
                        maxWidth: 160,
                        height:260}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={tantian}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            TanTian
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Backend Team
                        </Typography>
                        <Typography gutterBottom variant="h9" component="h6">
                        e190194@e.ntu.edu.sg
                         </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
            <Box>
                    <Card sx={{
                        marginLeft: 2,
                        minWidth:150,
                        maxWidth: 160,
                        height:260}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={jessie}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jessie
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Backend Team
                        </Typography>
                        <Typography gutterBottom variant="h9" component="h6">
                        ngwe0101@e.ntu.edu.sg
                         </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 2,
                        minWidth:150,
                        maxWidth: 160,
                        height:260}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={wenhao}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Wenhao
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Frontend Team
                        </Typography>
                        <Typography gutterBottom variant="h9" component="h6">
                        e200163@e.ntu.edu.sg
                         </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 2,
                        minWidth:150,
                        maxWidth: 160,
                        height:260}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={xinyao}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Xinyao
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Group Teasure Frontend Team
                        </Typography>
                        <Typography gutterBottom variant="h9" component="h6">
                            liux0111@e.ntu.edu.sg
                         </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Box>
             <Box>
                    <Card sx={{
                        marginLeft: 2,
                        minWidth:150,
                        maxWidth: 160,
                        height:260}} >
                    <CardActionArea>
                        <CardMedia
                        component="img"

                        height="140"
                        image={yixin}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Yixin
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Frontend Team
                        </Typography>
                        <Typography gutterBottom variant="h9" component="h6">
                            feng0126@e.ntu.edu.sg
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
                    sx={{ mt: 3, mb: 2, borderRadius: '25px'}}
                    href='/Training'
                >
                    Start the Training 
                </Button>
                </Box>
            
        </Container>
  );
}

