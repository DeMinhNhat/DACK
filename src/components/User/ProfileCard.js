import React from "react";
import Card from "@material-ui/core/Card";

export const ProfileCard = props => {
  return (
    <Card class="card tlp-card">
      <img src={props.data.img} alt="John" />
      <h1>{props.data.name}</h1>
      <p class="title">CEO & Founder, Example</p>
      <p>{props.data.university}</p>
      <p>
        <button>{props.check}</button>
      </p>
    </Card>
  );
};
