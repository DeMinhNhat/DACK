import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import LeftLogin  from'./LeftLogin/Left';

import '../../utils/login.css'


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <LeftLogin />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="rightLogin">
                        <div className="blockFromLogin">
                            <form>
                                <div className="formLogin">
                                    <div className="inline">
                                        <TextField
                                            id="standard-dense"
                                            label="username"
                                            margin="dense"
                                        />
                                    </div>
                                    <div className="inline2">
                                        <div>
                                            <TextField
                                                id="standard-dense"
                                                label="Password"
                                                type="password"
                                                margin="normal"
                                            />
                                        </div>
                                        <a href="#"> forgot password?</a>
                                    </div>
                                    <div className="inline3">
                                        <Button variant="outlined" color="primary">
                                            Log In
                                </Button>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="blockContent">
                            <i class="fab fa-twitter"></i>
                            <p>See what’s happening in the world right now </p>
                        </div>
                        <div className="clockSignUp">
                            <p>Join Twitter today.</p>
                            <Button variant="contained" color="primary">
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default Login;