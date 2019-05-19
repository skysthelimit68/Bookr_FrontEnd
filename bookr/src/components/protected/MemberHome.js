import React from 'react';
import { connect } from "react-redux";
import BookList from "./BookList";
import { getBooks } from "../../actions"

class MemberHome extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render(){
        return(
            <div>
                <h1>You've reached a secured area</h1>
                <BookList books={this.props.books} />
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
    books : state.books
})


export default connect(
    mapStateToProps,
    { getBooks }
)(MemberHome) ;