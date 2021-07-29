import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardImage from './cardImage.png'

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    width:'30vw',
  },

  container:{
      display:'flex',
      alignItems:'left',
    },
    
  media:{
      width:'10vw',
      
  }

//   content:{


//   }
});

export default function ChallengeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.container}>
        <CardMedia
          component="img"
          alt="card image"
        //   height="140"
          image={cardImage}
          title="card image"
          className={classes.media}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}