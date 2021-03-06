import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { PIC } from "../constants";

import "../utils/profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        readOnly: true,
        name: this.props.auth.userName,
        avatar: "https://img.icons8.com/metro/1600/github.png"
      }
    };
  }

  componentDidMount() {
    this.setState({
      user: {
        readOnly: true,
        name: this.props.auth.userName,
        avatar: "https://img.icons8.com/metro/1600/github.png"
      }
    });
  }

  handleChange = e => {
    this.setState({
      user: {
        readOnly: false,
        name: e.target.value,
        avatar: this.state.user.avatar
      }
    });
  };

  editInfo = () => {
    this.setState({
      user: {
        readOnly: false,
        name: this.state.user.name,
        avatar: this.state.user.avatar
      }
    });
  };

  saveInfo = e => {
    e.preventDefault();

    this.setState({
      user: {
        readOnly: true,
        name: this.state.user.name,
        avatar: this.state.user.avatar
      }
    });
    this.props.onUpdateName(this.state.user.name);
  };

  handlePayment = (event) => {
        event.preventDefault();
        let public_key = event.target.pk.value
        let penny = event.target.p.value;
        this.props.onPayment(public_key, penny);
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
                  <TextField
                    name="name"
                    disabled={this.state.user.readOnly}
                    value={this.state.user.name}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="inline2">
                  <div hidden={!this.state.user.readOnly}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      className="edit"
                      onClick={this.editInfo}
                    >
                      Edit
                    </Button>
                  </div>
                  <div hidden={this.state.user.readOnly}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      className="save"
                      onClick={e => this.saveInfo(e)}
                    >
                      Save
                    </Button>
                  </div>
                </div>
                <br class="clearBoth" />
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  className="edit"
                  onClick={() => this.props.onUpdatePic(PIC)}
                >
                  Update Pic
                </Button>
              </div>
            }
          />
        </form>
        <CardContent>
          <form onSubmit = {(e)=>this.handlePayment(e)}>
            <div className="profile-name inline1">
              <TextField
              label="Public key"
              name="pk"
              />
            </div>
            <div className="profile-name inline1">
              <TextField
              label="Penny"
              name="p"
              />
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              type="submit"
              className="edit"
            >
              Payment
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}
  /*<Link to="/user" className="linkFollowers">
          <ListItem className="profile-item" button>
            <ListItemText
              className="profile-item"
              primary="Tweets"
              style={{ flex: 1 }}
            />
            <Avatar className="profile-num-avatar profile-item">
              4
            </Avatar>
          </ListItem>
              </Link>

          <Link to="/user" className="linkFollowers">
            <ListItem className="profile-item" button>
              <ListItemText
                className="profile-item"
                primary="Followers"
                style={{ flex: 1 }}
              />

              <Avatar className="profile-num-avatar profile-item">
                5
              </Avatar>
            </ListItem>
          </Link>

          <Link to="/user" className="linkFollowing">
            <ListItem className="profile-item" button>
              <ListItemText
                className="profile-info"
                primary="Following"
                style={{ flex: 1 }}
              />
              <Avatar className="profile-num-avatar profile-item">
                6
              </Avatar>
            </ListItem>
          </Link>*/