import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sticky from "react-sticky-el";
import Profile from "../Profile";
import Navbar from "../Navbar";
import Tabs from "./Tabs";

import "../../utils/home.css";
import "../../utils/tabs.css";

export default class User extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
            xs={7}
          >
            <Tabs />
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    );
  }
}
