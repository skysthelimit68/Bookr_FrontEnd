import React from "react";
import compose from 'recompose/compose';

import { connect } from "react-redux";
import { fetchBook } from "../../../actions";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';
import BookReviews from './BookReviews';



const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            
        }
    }

    componentWillMount() {
        this.props.fetchBook(this.state.id)   
    }
    
    render() {
        if(!this.props.activeBook.reviews || !this.props.activeBook.stars) return (<div>Book is loading...</div>)
        
        return (
            <div>
                <div className="bookpage_img_wrapper">
                    <img src={this.props.activeBook.img} />
                    <div className="star_rating">
                    <StarRatingComponent 
                        name="stars" 
                        starCount={5}
                        value={this.props.activeBook.stars.reduce((a,b) => a + b, 0) / this.props.activeBook.stars.length}
                    />
                    </div>
                    
                </div>
                <div className="bookpage_desc_wrapper">
                    <Typography variant="h5" component="h3">
                        {this.props.activeBook.title}
                    </Typography>
                    <Typography variant="h5" component="h5">
                        {this.props.activeBook.author}
                    </Typography>
                    <Typography component="p">
                        {this.props.activeBook.description}
                    </Typography>
                   
                </div>
                <div className="bookpage_reviews_wrapper">
                    <BookReviews reviews={this.props.activeBook.reviews} />
                </div>
            </div>
                
            )
    }

}

const mapStateToProps = state => ({
    activeBook: state.activeBook
})

BookDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default compose(
    withStyles(styles, { name: 'BookDetail' }),
    connect(mapStateToProps, {fetchBook})
  )(BookDetail)

/*
export default connect(
    mapStateToProps,
    { fetchBook }
)(withStyles(styles)(BookDetail))
*/