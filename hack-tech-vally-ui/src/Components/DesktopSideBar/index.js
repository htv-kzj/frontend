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

  const { fontColor, busColor, iconColor, themeColor, selectColor } = GlobalStyle;
  const { headerStyle, busStyle, titleStyle } = Style;

  const menuHandler = (r) => {
    props.clickHandler(r.vehicleId);
    if(props.windowWidth <= 767){
      props.toggleHandler();
    }
  }

  return (
    <div className="side-bar">
      <Drawer
        open={props.sideBarToggled}
        width={props.windowWidth <= 380 && '70%'}
        docked={props.windowWidth <= 767 ? false : true}
        onRequestChange={() => props.windowWidth <= 767 ? props.toggleHandler() : null}
      >
        <div style={{...headerStyle, display: props.windowWidth <= 380 && 'none'}}>
          <Bus color={"white"} style={busStyle} />
          <h1 style={titleStyle}>Schenectady County</h1>
        </div>
        {props.vehicles.map((r) =>
          <MenuItem
            key={r.vehicleId}
            style={{
              backgroundColor: r.vehicleId === props.selectedVehicleId ? selectColor : 'white',
              color: r.vehicleId === props.selectedVehicleId ? fontColor : 'black',
              fontWeight: r.vehicleId === props.selectedVehicleId && 'bold',
            }}
            onClick={() => menuHandler(r)}
          >
            <div>
              <p>Vehicle {r.vehicleId}</p>
              <p>Location: {r.location}</p>
            </div>
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
