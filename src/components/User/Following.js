import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { ProfileCard } from "./ProfileCard";

import "../../utils/follow.css";

export default class Following extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.props.getFollowings(this.props.user);
    }

    componentWillUnmount() {}

    render() {
        const element = people.map((val, index) => (
            <Grid item xs={12} sm={4} key={index}>
        {" "}
        <ProfileCard data={val} check="Following" />{" "}
      </Grid>
        ));
        console.log(element);
        return (
            <Grid container spacing={5}>
        {element}
      </Grid>
        );
    }
}

// hardcode to test :V
const people = [{
        img: "http://img.bongdanet.vn/application/admin/image/18.12.2017/Kaka_-_giai_nghe.jpg",
        name: "Kaka",
    },
    {
        img: "http://img.bongdanet.vn/application/admin/image/18.12.2017/Kaka_-_giai_nghe.jpg",
        name: "Messi",
    },
];