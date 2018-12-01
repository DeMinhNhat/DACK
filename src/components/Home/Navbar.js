import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import "../../utils/navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      photos: [
        "https://genknews.genkcdn.vn/2016/hinh-nen-gam-3d-2-1474200966875.jpg",
        "https://hinhnendep.xyz/wp-content/uploads/2016/07/hinh-nen-lien-minh-lol-dep-hd-6.jpg",
        "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/12/Thresh_Qu%C3%A1n_Qu%C3%A2n.jpg/revision/latest?cb=20160408163627&path-prefix=vi"
      ],
      albums: [1, 2, 3],
      tags: [1, 2, 3],
      comments: "",
      pickimage: false,
      writecontent: false,
      addtags: false,
      pickalbum: false
    };
  }

  render() {
    return (
      <div>
        <AppBar className="appbar" color="inherit" position="static">
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Toolbar>
                <Button className="page-button" color="inherit">
                  <IconButton color="inherit">
                    <HomeIcon />
                  </IconButton>
                  HOME
                </Button>
                <Button className="page-button" color="inherit">
                  <IconButton color="inherit">
                    <Badge badgeContent={1} color="primary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  NOTIFICATION
                </Button>
                <Button className="page-button" color="inherit">
                  <IconButton color="inherit">
                    <Badge invisible="false" badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  MESSAGES
                </Button>

                <div className="flexgrow" />

                <TextField
                  className="search"
                  placeholder="Search..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />

                <Avatar src="https://img.icons8.com/metro/1600/github.png" />
              </Toolbar>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </AppBar>
      </div>
    );
  }
}
