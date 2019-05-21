import React from "react";
import Review from "./Review";
import { connect } from "react-redux";


class BookReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews : props.reviews
        }
    }


    render() {
        console.log(this.state.reviews)
        return(
        <div>
            {this.state.reviews.map(review => (
                <Review review={review}/>
            )
                
            )}
        </div>
    )
    }
    
}
/*
const mapStateToProps = state => ({
    reviews : state.activeBook.reviews
})

export default connect(
    mapStateToProps,
    { }
)(BookReviews);
*/

export default BookReviews;