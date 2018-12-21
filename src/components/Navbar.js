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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

import "../utils/navbar.css";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    onOpenPost = () => {
        this.setState({ open: true });
    };

    onClosePost = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
        <AppBar className="appbar" color="inherit" position="static">
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Toolbar>
                <Button
                  component={Link}
                  to={`/`}
                  className="page-button"
                  color="inherit"
                >
                  <IconButton color="inherit">
                    <HomeIcon />
                  </IconButton>
                  Home
                </Button>

                <Button
                  component={Link}
                  to={`/`}
                  className="page-button"
                  color="inherit"
                >
                  <IconButton
                    color="inherit"
                    style={{ backgroundColor: "#1DA1F2 !important" }}
                  >
                    <Badge badgeContent={10}>
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  Notifications
                </Button>

                <Button
                  component={Link}
                  to={`/`}
                  className="page-button"
                  color="inherit"
                >
                  <IconButton color="inherit">
                    <Badge invisible="false" badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  Messages
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
                <Link to="/user">
                  <Avatar src="https://img.icons8.com/metro/1600/github.png" />
                </Link>

                <Button
                  onClick={this.onOpenPost}
                  style={{ fontWeight: "bold" }}
                  className="chirp"
                  variant="contained"
                  color="primary"
                >
                  Chirp
                </Button>
              </Toolbar>
            </Grid>
            <Grid item xs={1} />
          </Grid>

          <Dialog
            open={this.state.open}
            onClose={this.onClosePost}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Chirping</DialogTitle>
            <DialogContent
              fullWidth
              style={{
                height: "160px",
                width: "500px"
              }}
            >
              <TextField
                className="post"
                placeholder="What's happening?"
                fullWidth
                margin="normal"
                variant="outlined"
                multiline={true}
                rows={1}
                rowsMax={6}
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={()=>this.props.onPost("tui đang test aaaaaa nhé mấy bros :3")}
                className="chirp"
                variant="contained"
                color="primary"
              >
                Chirp
              </Button>
            </DialogActions>
          </Dialog>
        </AppBar>
      </div>
        );
    }
}
// onClick={()=>this.props.onPost("tui đang test nhé mấy bros :3")}
// onClick={()=>this.props.onFollow("GAKXVIL35CL7QRBFIAXCYMOAV4JKD3QDWGRYJRMSWNRJWX7RL726IAOF")}