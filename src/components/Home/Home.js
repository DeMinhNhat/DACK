import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sticky from "react-sticky-el";
import { Redirect } from 'react-router-dom'
import NavbarContainer from "../../containers/NavbarContainer";
import PostsContainer from "../../containers/PostsContainer";
import ProfileContainer from "../../containers/ProfileContainer";

import "../../utils/home.css";

export default class Home extends Component {
    render() {
        // if (this.props.auth.isUserSignedIn === false)
        //     return <Redirect to='/login' />;
          
        return (
            <div>
        <NavbarContainer />
        <Grid container spacing={12}>
          <Grid item xs={1} />
          <Grid className="grid" item xs={3}>
            <Sticky>
              <ProfileContainer />
            </Sticky>
          </Grid>
          <Grid
            style={{ justifyContent: "center" }}
            className="grid"
            item
            xs={6}
          >
            <PostsContainer />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
        );
    }
}