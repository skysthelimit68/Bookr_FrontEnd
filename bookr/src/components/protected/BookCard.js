import React from "react";

const BookCard = props => {
    return(
        <div>
            <h3>{props.book.title}</h3>
            <h5>by{" "}{props.book.author}</h5>
            <p>{props.book.description}</p>
        </div>
    )
}

export default BookCard;