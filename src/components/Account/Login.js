import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

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
                    Right
                </Grid>
            </Grid>
        )
    }
}

export default Login;