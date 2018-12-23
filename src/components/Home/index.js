import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sticky from "react-sticky-el";
import { Redirect } from "react-router-dom";
import Profile from "./../Profile";
import Navbar from "./../Navbar";
import Posts from "./Posts";
import "../../utils/home.css";

export default class Home extends Component {
  render() {
    if (!this.props.auth.isUserSignedIn) return <Redirect to="/login" />;

    return (
      <div>
        <Navbar auth={this.props.auth} onLogOut={this.props.onLogOut} onPost={this.props.onPost}  />
        <Grid container spacing={12}>
          <Grid item xs={1} />
          <Grid className="grid" item xs={3}>
            <Sticky>
              <Profile auth={this.props.auth} onUpdateName={this.props.onUpdateName} />
            </Sticky>
          </Grid>
          <Grid
            style={{ justifyContent: "center" }}
            className="grid"
            item
            xs={6}
          >
            <Posts
              posts={this.props.posts}
              retrievePost={this.props.retrievePost}
            />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}
