import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sticky from "react-sticky-el";
import NavbarContainer from "../../containers/NavbarContainer";
import PostsContainer from "../../containers/PostsContainer";
import Profile from "../Profile";

import "../../utils/home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <Grid container spacing={12}>
          <Grid item xs={1} />
          <Grid className="grid" item xs={3}>
            <Sticky>
              <Profile />
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
