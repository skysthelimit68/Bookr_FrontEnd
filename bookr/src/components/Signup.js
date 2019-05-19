import React from 'react';
import MemberForm from "./MemberForm";
import { signUp } from "../actions";
import { connect } from "react-redux"

const Signup = props => {
    
    const handleSignup = newUser => {
        props.signUp(newUser)
        .then(() => props.history.push('/member-area'))

    }
    
    
    return (
        <div>
            <h2>Sign up</h2>
            <MemberForm newUser={true} signup={handleSignup}/>
            </div>
    )
}

export default connect(
    null,
    { signUp }
)(Signup);