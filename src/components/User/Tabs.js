import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default class InfoTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Followers' };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <AppBar color="inherit" position="static" style={{ marginTop: "64px" }}>
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab value="Followers" label="Followers" />
            <Tab value="Following" label="Following" />
          </Tabs>
        </AppBar>
        {this.state.value === 'Followers' && <TabContainer>Item Followers</TabContainer>}
        {this.state.value === 'Following' && <TabContainer>Item Following</TabContainer>}
      </div>
    );
  }
}
