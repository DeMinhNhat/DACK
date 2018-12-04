import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "../utils/profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        avatar: "https://img.icons8.com/metro/1600/github.png",
        name: "Tokama",
        about: "I am a professional, hehe",
        tweetNum: 3,
        followingNum: 7,
        followerNum: 5
      }
    };
  }

  render() {
    return (
      <Card className="profile-card">
        <CardHeader
          className="profile-card-header"
          avatar={
            <Avatar
              component={Link}
              to={`/user`}
              src={this.state.user.avatar}
              className="profile-avatar"
            />
          }
          title={
<div>
            <div className="profile-name">
          {this.state.user.name}
          </div>
          <Button variant="outlined" color="primary" size="small" className="edit">
            Edit
          </Button>
          </div>}
          subheader={
            <div className="profile-about">{this.state.user.about}</div>
          }
        />
        <CardContent>
          <ListItem className="profile-item" button>
            <ListItemText
              className="profile-item"
              primary="Tweets"
              style={{ flex: 1 }}
            />
            <Avatar className="profile-num-avatar profile-item">
              {this.state.user.tweetNum}
            </Avatar>
          </ListItem>

          <Link to='followers' className="linkFollowers">
            <ListItem className="profile-item" button>
              <ListItemText
                className="profile-item"
                primary="Followers"
                style={{ flex: 1 }}
              />

              <Avatar className="profile-num-avatar profile-item">
                {this.state.user.followerNum}
              </Avatar>

            </ListItem>
          </Link>

          <Link to='following' className="linkFollowing">
            <ListItem className="profile-item" button>
              <ListItemText
                className="profile-info"
                primary="Following"
                style={{ flex: 1 }}
              />
              <Avatar className="profile-num-avatar profile-item">
                {this.state.user.followingNum}
              </Avatar>
            </ListItem>
          </Link>
        </CardContent>
      </Card>
    );
  }
}
