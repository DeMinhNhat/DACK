import React, { Component } from "react";
import Post from "./Post";

import "../../utils/posts.css";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
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
        }
      ]
    };
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    this.props.retrievePost();
  };

  render() {
    let posts = this.props.posts.map((post, index) => {
      return (
        <Post
          index={index}
          avatar="https://pbs.twimg.com/profile_images/733142049864585216/IzFb9HCz_400x400.jpg"
          user={post.account}
          chirp={post.params.content}
          likeNum={1}
          loveNum={1}
          hahaNum={1}
          liked={false}
          loved={true}
          hahad={false}
        />
      );
    });
    return <div style={{ marginTop: "40px" }}>{posts}</div>;
  }
}
