import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sticky from "react-sticky-el";
import Navbar from "./Navbar";
import Profile from "./Profile";
import "../../utils/home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid container spacing={32}>
          <Grid item xs={1} />
          <Grid className="grid" item xs={3}>
            <Sticky>
              <Profile />
            </Sticky>
          </Grid>
          <Grid className="grid" item xs={6} />
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            className="grid"
            item
            xs={1}
          />
          <Grid item xs={1} />
        </Grid>
      </div>
    );
  }
}
