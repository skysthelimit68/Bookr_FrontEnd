import React from "react";
import StarRatingComponent from 'react-star-rating-component';


const Review = props => {
    return(
        <div>
            <p>{props.review.reviewer} {" "} 
            <StarRatingComponent 
                name="stars" 
                starCount={5}
                value={props.review.stars}
            /></p>
        {props.review.review ? props.review.review : null }</div>
    )
}

export default Review;