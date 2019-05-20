import React from 'react';
import MemberForm from './MemberForm'
import { login } from "../actions";
import { connect } from "react-redux"

const Login = props => {

    const handleLogin = creds => {
        props.login(creds)
        .then(() => props.history.push('/member-area'))     
    }

    return (
        <div className="container">
            <h2>Sign in</h2>
            <MemberForm newUser={false} login={handleLogin}/>
        </div>
    )
}

export default connect(
    null,
    { login }
)(Login) ;