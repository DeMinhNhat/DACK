import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InputBase from "@material-ui/core/InputBase";

import "../../utils/posts.css";

export default class Post extends Component {
  toggleLike = () => {
    this.props.toggleLike(this.props.index);
  };

  toggleLove = () => {
    this.props.toggleLove(this.props.index);
  };

  toggleHaha = () => {
    this.props.toggleHaha(this.props.index);
  };

  onShare = () => {
    this.props.onShare(this.props.index);
  };

  onComment = () => {
    this.props.onComment(this.props.index);
  };

  render() {
    return (
      <Card className="tlp-card">
        <CardHeader
          className="tlp-card-header"
          avatar={<Avatar src={this.props.avatar} className="tlp-avatar" />}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <div>
              <div className="tlp-username">{this.props.user}</div>
              <p className="tlp-time">
                {" "}
                <i class="far fa-clock" /> {this.props.time}{" "}
              </p>
            </div>
          }
        />
        <CardContent className="tlp-card-content">
          <div className="tlp-chirp">{this.props.chirp}</div>
        </CardContent>

        <CardActions disableActionSpacing className="tlp-card-action">
          {this.props.liked ? (
            <div className="tlp-action-field" style={{ color: "#DB969A" }}>
              <IconButton
                disableRipple="true"
                disableTouchRipple="true"
                className="tlp-action-icon"
                onClick={this.toggleLike}
              />
              <i class="fas fa-thumbs-up" />
              &nbsp;{this.props.likeNum}
            </div>
          ) : (
            <div className="tlp-action-field" style={{ color: "#292D3E" }}>
              <IconButton
                disableRipple="true"
                disableTouchRipple="true"
                className="tlp-action-icon"
                onClick={this.toggleLike}
              />
              <i class="fas fa-thumbs-up" />
              &nbsp;{this.props.likeNum}
            </div>
          )}

          <div className="tlp-action-field">
            <IconButton
              disableRipple="true"
              disableTouchRipple="true"
              className="tlp-action-icon"
              onClick={this.toggleLove}
            />
            <i class="fas fa-heart" />
            &nbsp;{this.props.loveNum}
          </div>

          <div className="tlp-action-field">
            <IconButton
              disableRipple="true"
              disableTouchRipple="true"
              className="tlp-action-icon"
              onClick={this.toggleHaha}
            />
            <i class="far fa-grin-tears" />
            &nbsp;{this.props.hahaNum}
          </div>

          <div className="tlp-action-field">
            <IconButton
              disableRipple="true"
              disableTouchRipple="true"
              className="tlp-action-icon"
              onClick={this.onShare}
            />
            <i class="fas fa-retweet" />
            &nbsp;{this.props.shareNum}
          </div>

          <div className="tlp-action-field">
            <IconButton
              disableRipple="true"
              disableTouchRipple="true"
              className="tlp-action-icon"
              onClick={this.onComment}
            />
            <i class="far fa-comments" />
            &nbsp;{this.props.commentNum}
          </div>
        </CardActions>

        <CardActions disableActionSpacing className="tlp-card-action-comment">
          <InputBase
            fullWidth
            placeholder="Add your comment..."
            margin="normal"
          />
        </CardActions>
      </Card>
    );
  }
}
