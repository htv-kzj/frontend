import React from 'react';
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Bus from 'material-ui/svg-icons/maps/directions-bus';
import WindowSize from 'react-window-size';
import './style.css';
import Style from './style.js';
import GlobalStyle from '../../style.js';

const DesktopSideBar = (props) => {

  const { fontColor, busColor, iconColor, themeColor } = GlobalStyle;
  const { headerStyle, busStyle, titleStyle } = Style;

  return (
    <div className="side-bar">
      <Drawer
        open={props.windowWidth <= 380 ? true : true}
        width={props.windowWidth <= 380 && '70%'}
      >
        <div style={{...headerStyle, display: props.windowWidth <= 380 && 'none'}}>
          <Bus color={"white"} style={busStyle} />
          <h1 style={titleStyle}>Schenectady County</h1>
        </div>
        {props.vehicles.map((r) =>
          <MenuItem
            key={r.vehicleId}
            style={{backgroundColor: r.vehicleId === props.selectedVehicleId ? '#c8c8c8' : 'white', color: r.vehicleId === props.selectedVehicleId ? fontColor : 'black',}}
            onClick={() => props.clickHandler(r.vehicleId)}
          >
            Vehicle {r.vehicleId}
          </MenuItem>
        )}
      </Drawer>
    </div>
  );
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

export default WindowSize(DesktopSideBar);
