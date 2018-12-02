import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "../../utils/profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        avatar: "https://img.icons8.com/metro/1600/github.png",
        name: "Tokama",
        tweetNum: 3,
        followingNum: 7,
        followerNum: 5,
      }
    };
  }

  render() {
    return (
      <Card className="profile-card">
        <CardHeader
          className="profile-card-header"
          avatar={
            <Avatar src={this.state.user.avatar} className="profile-avatar" />
          }
          title={<div className="profile-name">{this.state.user.name}</div>}
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
          <ListItem className="profile-item" button>
            <ListItemText
              className="profile-item"
              primary="Following"
              style={{ flex: 1 }}
            />
            <Avatar className="profile-num-avatar profile-item">
              {this.state.user.followingNum}
            </Avatar>
          </ListItem>
        </CardContent>
      </Card>
    );
  }
}
