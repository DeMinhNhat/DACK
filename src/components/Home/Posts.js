import React, { Component } from "react";
import Post from "./Post";

import "../../utils/posts.css";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          avatar:
            "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          chirp: "Lorem ipsum dolor si",
          likeNum: 3,
          loveNum: 3,
          hahaNum: 7,
          shareNum: 2,
          commentNum: 4,
          liked: true,
          loved: false,
          hahad: false,
          shared: false,
          commentContent: [
            {
              user: "",
              content: ""
            }
          ]
        },
        {
          avatar:
            "https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg",
          user: "Fumika Chan",
          time: "An hour ago",
          chirp: "Lorem ipsum dolor si",
          likeNum: 3,
          loveNum: 3,
          hahaNum: 7,
          shareNum: 2,
          commentNum: 4,
          liked: false,
          loved: false,
          hahad: false,
          shared: false,
          commentContent: [
            {
              user: "",
              content: ""
            }
          ]
        }
      ]
    };
  }

  toggleLove = inx => {};

  toggleCheck = inx => {};

  render() {
    let elements = this.state.users.map((user, index) => {
      return (
        <Post
          index={index}
          avatar={user.avatar}
          user={user.user}
          time={user.time}
          chirp={user.chirp}
          likeNum={user.likeNum}
          loveNum={user.loveNum}
          hahaNum={user.hahaNum}
          shareNum={user.shareNum}
          commentNum={user.commentNum}
          liked={user.liked}
          loved={user.loved}
          hahad={user.hahad}
          shared={user.shared}
          toggleLike={this.toggleLike}
          toggleLove={this.toggleLove}
          toggleHaha={this.toggleHaha}
          onShare={this.onShare}
          onComment={this.onComment}
        />
      );
    });
    return <div style={{ marginTop: "64px" }}>{elements}</div>;
  }
}
