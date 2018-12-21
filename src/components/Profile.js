import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import { PIC } from "../constants";

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
        followerNum: 5,
        readOnly: true
      }
    };


  }

  editInfo =() => {
    this.setState({
      user :{
        readOnly: !this.state.user.readOnly  
      }
    })
  }

  saveInfo =() => {
    this.setState({
      user :{
        readOnly: !this.state.user.readOnly 
      }
    })
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
<<<<<<< HEAD
            <div class="cardHeader-inline">
              <div className="profile-name inline1">
                <TextField disabled={this.state.user.readOnly} defaultValue={this.state.user.name} />
              </div>
              <div className='inline2'>
                <div hidden={!this.state.user.readOnly}>
                  <Button variant="outlined" color="primary" size="small" className="edit" onClick={this.editInfo}>
                    Edit
                  </Button>
                </div>
                <div hidden={this.state.user.readOnly}>
                  <Button variant="outlined" color="primary" size="small" className="save" onClick={this.saveInfo}>
                    Save
                  </Button>
                </div>
              </div>
              <br class="clearBoth" />
=======
            <div>
              <div className="profile-name">{this.state.user.name}</div>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                className="edit"
                onClick={()=>this.props.onUpdatePic(PIC)}
              >
                Edit
              </Button>
>>>>>>> 1f49577e9f82d28e9b56ae22e777b940c0faca4d
            </div>
          }
          subheader={
            <div className={this.state.user.readOnly ? 'profile-about-readOnly' : 'profile-about'}>
                <TextField disabled={this.state.user.readOnly} defaultValue={this.state.user.about}/>
            </div>
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

          <Link to="followers" className="linkFollowers">
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

          <Link to="following" className="linkFollowing">
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