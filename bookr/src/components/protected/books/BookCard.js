import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRatingComponent from 'react-star-rating-component';


const styles = {
    card: {
      maxWidth: 285
    },
    media: {
      height: 320
    }
  };

const BookCard = props => {
    const { classes } = props;
    const avgStars = props.book.stars.reduce((a,b) => a + b, 0) / props.book.stars.length
    return(
        <Card className={`${classes.card} bookcard`}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.book.img}
                title={props.book.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.book.title}
                </Typography>
                <Typography gutterBottom variant="h7" component="h3">
                    by {props.book.author}
                </Typography>
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={avgStars}
                />
              
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
    )
}

BookCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookCard);

/* 
<Typography component="p">
    {props.book.shortDescription}
</Typography>
*/