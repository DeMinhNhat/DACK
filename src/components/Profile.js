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
        name: this.props.auth.userName,
        tweetNum: 3,
        followingNum: 7,
        followerNum: 5,
        readOnly: true
      }
    };


  }

  handleChange = (e) => {
    let name =this.state.user.name;

    name = e.target.value ;

    this.setState({
      user :{
        avatar: this.state.user.avatar,
        name: name,
        tweetNum: this.state.user.tweetNum,
        followingNum: this.state.user.followingNum,
        followerNum: this.state.user.followerNum,
        readOnly: false
      }
    })
}

  editInfo =() => {
    this.setState({
      user :{
        avatar: this.state.user.avatar,
        name: this.state.user.name,
        tweetNum: this.state.user.tweetNum,
        followingNum: this.state.user.followingNum,
        followerNum: this.state.user.followerNum,
        readOnly: false
      }
    })
  }

  saveInfo =(e) => {
    e.preventDefault();
    const form = {
     name: this.state.user.name,
    }


    this.setState({
      user :{
        avatar: this.state.user.avatar,
        name: this.state.user.name,
        tweetNum: this.state.user.tweetNum,
        followingNum: this.state.user.followingNum,
        followerNum: this.state.user.followerNum,
        readOnly: true
      }
    })
    
    this.props.onUpdateName(this.state.user.name);
  }

  render() {
    return (
      <Card className="profile-card">
        <form>
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
              <div class="cardHeader-inline">
                <div className="profile-name inline1">
                  <TextField name='name' disabled={this.state.user.readOnly} value={this.state.user.name} onChange={e => this.handleChange(e)}/>
                </div>
                <div className='inline2'>
                  <div hidden={!this.state.user.readOnly}>
                    <Button variant="outlined" color="primary" size="small" className="edit" onClick={this.editInfo}>
                      Edit
                  </Button>
                  </div>
                  <div hidden={this.state.user.readOnly}>
                    <Button variant="outlined" color="primary" size="small" className="save" onClick={(e)=>this.saveInfo(e)}>
                      Save
                  </Button>
                  </div>
                </div>
                <br class="clearBoth" />
              </div>
            }
          />
        </form>
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
