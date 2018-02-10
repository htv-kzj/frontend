import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import './style.css';
import './style.js';

export default class DesktopSideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div className="side-bar">
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Vehicle 1</MenuItem>
          <MenuItem>Vehicle 3</MenuItem>
          <MenuItem>Vehicle 10</MenuItem>
          <MenuItem>Vehicle 12</MenuItem>
          <MenuItem>Vehicle 13</MenuItem>
          <MenuItem>Vehicle 15</MenuItem>
        </Drawer>
      </div>
    );
  }
}
