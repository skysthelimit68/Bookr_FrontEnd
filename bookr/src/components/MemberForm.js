import React from 'react';
import classNames from 'classnames';
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
    constructor(){
        super();
        this.state={
            id: '',
            name: "",
            username: "",
            email: "",
            password: "",
            canEdit: false,           
        }
    }

    updateField = event => {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    


    render(){
        const { classes } = this.props;

        return(
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    label="Name"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="UserName"
                    className={classes.textField}
                    type="text"
                    name="username"
                    autoComplete="username"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
            </form>
        )
    }
    
}

export default withStyles(styles)(MemberForm);
