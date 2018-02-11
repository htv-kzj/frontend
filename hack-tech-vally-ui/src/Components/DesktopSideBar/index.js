import React from 'react';
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Bus from 'material-ui/svg-icons/maps/directions-bus';
import './style.css';
import Style from './style.js';
import GlobalStyle from '../../style.js';

export default class DesktopSideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  // <RaisedButton
  //   label="Toggle Drawer"
  //   onClick={this.handleToggle}
  //   style={{position: 'absolute', right: '-50px', top: '100px'}}
  // />

  render() {
    const { fontColor, busColor, iconColor, themeColor } = GlobalStyle;
    return (
      <div className="side-bar">
        <Drawer open={this.state.open} style={{position: 'relative'}}>
          <div style={{backgroundColor: themeColor, paddingTop: 50, paddingBottom: 50, alignItems: 'center'}}>
            <Bus color={"white"} style={{height: 50, width: 50, paddingTop: 5}} />
            <h1 style={{color: "white", textAlign: 'center'}}>Schenectady County</h1>
          </div>
          {this.props.vehicles.map((r) =>
            <MenuItem
              key={r.vehicleId}
              style={{backgroundColor: r.vehicleId === this.props.selectedVehicleId ? '#c8c8c8' : 'white', color: r.vehicleId === this.props.selectedVehicleId ? fontColor : 'black',}}
              onClick={() => this.props.clickHandler(r.vehicleId)}
            >
              Vehicle {r.vehicleId}
            </MenuItem>
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
