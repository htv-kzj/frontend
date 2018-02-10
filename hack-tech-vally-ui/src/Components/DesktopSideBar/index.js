import React from 'react';
import PropTypes from 'prop-types'
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
          {this.props.vehicles.map((r) =>
            <MenuItem key={r.vehicleId} checked={r.vehicleId === this.props.selectedVehicleId ? true : false} onClick={() => this.props.clickHandler(r.vehicleId)}>Vehicle {r.vehicleId}</MenuItem>
          )}
        </Drawer>
      </div>
    );
  }
}

DesktopSideBar.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object),
  clickHandler: PropTypes.func,
  selectedVehicleId: PropTypes.number,
}

DesktopSideBar.defaultProps = {
  vehicles: [
    {
      vehicleId: 17,
      latitude: '42.825583',
      longitude: '-73.928019',
      location: 'Mohawk Hudson Bikeway',
    },
    {
      vehicleId : 10,
      latitude: '42.830081',
      longitude: '-73.950404',
      location: '206 Washington Ave',
    },
  ],
  selectedVehicleId: 17,
  clickHandler: () => console.log('clicked vehicle'),
}
