import React from "react";
import BookCard from "./BookCard"

const BookList = props => {
    return(
        <div>
            {props.books.map( book => <BookCard book={book} />)}
        </div>
    )
}

export default BookList;