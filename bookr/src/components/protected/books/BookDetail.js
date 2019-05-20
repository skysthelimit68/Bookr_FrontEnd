import React from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../../actions";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';


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
            avgStars : 0
        }
    }

    

    componentDidMount() {
        this.props.fetchBook(this.state.id)
        .then( () => this.setState({ 
            avgStars : this.props.activeBook.stars.reduce((a,b) => a + b, 0) / this.props.activeBook.stars.length
        }))
        
    }


    render() {
         
        return (
            <div>
                <div className="bookpage_img_wrapper">
                    <img src={this.props.activeBook.img} />
                    <div className="star_rating">
                    <StarRatingComponent 
                        name="stars" 
                        starCount={5}
                        value={this.state.avgStars}
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

export default connect(
    mapStateToProps,
    { fetchBook }
)(withStyles(styles)(BookDetail));