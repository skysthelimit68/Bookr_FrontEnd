import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing.unit,
          marginRight: theme.spacing.unit,
        },
        dense: {
          marginTop: 16,
        },
        menu: {
          width: 200,
        },
      });


class MemberForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            username: "",
            email: "",
            password: "",
            newUser: false       
        }
    }

    componentDidMount() {
        this.setState({
            newUser : this.props.newUser
        })
    }

    updateField = event => {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const userInfo = {
            name: this.state.name,
            username : this.state.username,
            email : this.state.email,
            password: this.state.password
        }
        const creds = {
            username : this.state.username,
            password : this.state.password
        }
        if(this.state.newUser) {
            this.props.signup(userInfo)

        } else {
            this.props.login(creds)
            
        }
    }

    render(){
        const { classes } = this.props;

        return(
            <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                {this.state.newUser ? <TextField
                    label="Name"
                    className={classes.textField}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.updateField}
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                /> : null}
                <TextField
                    label="UserName"
                    className={classes.textField}
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.updateField}
                    autoComplete="username"
                    margin="normal"
                    variant="outlined"
                />
                {this.state.newUser ? <TextField
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.updateField}
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                /> : null
                }
                <TextField
                    label="Password"
                    className={classes.textField}
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.updateField}
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
                <button type="submit">{this.state.newUser? "Sign me up!" : "Sign me in!"}</button>
            </form>
        )
    }
    
}

export default withStyles(styles)(MemberForm);
