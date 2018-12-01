import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "../utils/profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        avatar: "https://img.icons8.com/metro/1600/github.png",
        name: "Tokama",
        followingNum: 4,
        followerNum: 5,
        tweetNum: 3
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
          <ListItem button>
            <ListItemText primary="Tweets"  style={{ flex: 1 }}/>
            <Avatar>{this.state.user.tweetNum}</Avatar>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Followers"  style={{ flex: 1 }} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Following"  style={{ flex: 1 }}/>
          </ListItem>
        </CardContent>
      </Card>
    );
  }
}
