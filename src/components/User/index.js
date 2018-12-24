import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sticky from "react-sticky-el";
import { Redirect } from "react-router-dom";
import Profile from "./../Profile";
import Navbar from "./../Navbar";
import Tabs from "./Tabs";
import "../../utils/home.css";
import "../../utils/tabs.css";

export default class User extends Component {
  render() {
    if (!this.props.auth.isUserSignedIn) return <Redirect to="/login" />;

    return (
      <div>
        <Navbar auth={this.props.auth} onLogOut={this.props.onLogOut} onPost={this.props.onPost} />
        <Grid container spacing={12}>
          <Grid item xs={1} />
          <Grid className="grid" item xs={3}>
            <Sticky>
              <Profile auth={this.props.auth} onUpdateName={this.props.onUpdateName} onUpdatePic={this.props.onUpdatePic} />
            </Sticky>
          </Grid>
          <Grid
            style={{ justifyContent: "center" }}
            className="grid"
            item
            xs={7}
          >
            <Tabs getFollowings={this.props.getFollowings} user={this.props.auth} />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    );
  }
}
