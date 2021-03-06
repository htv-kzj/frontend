import React from 'react';
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Bus from 'material-ui/svg-icons/maps/directions-bus';
import CircularProgress from 'material-ui/CircularProgress';
import WindowSize from 'react-window-size';
import './style.css';
import Style from './style.js';
import GlobalStyle from '../../style.js';

const DesktopSideBar = (props) => {

  const { fontColor, busColor, iconColor, themeColor, selectColor } = GlobalStyle;
  const { headerStyle, busStyle, titleStyle } = Style;

  const menuHandler = (r) => {
    props.clickHandler(r);
    if(props.windowWidth <= 767){
      props.toggleHandler();
    }
  }

  return (
    <div className="side-bar">
      <Drawer
        open={props.windowWidth <= 767 ? !props.sideBarToggled : props.sideBarToggled}
        width={props.windowWidth <= 380 && '70%'}
        docked={props.windowWidth <= 767 ? false : true}
        onRequestChange={() => props.windowWidth <= 767 ? props.toggleHandler() : null}
      >
        <div style={{...headerStyle, display: props.windowWidth <= 380 && 'none'}}>
          <Bus color={"white"} style={busStyle} />
          <h1 style={titleStyle}>Fleetser</h1>
        </div>
        {props.vehicles.map((r) =>
          <MenuItem
            key={r.vehicleid}
            style={{
              backgroundColor: r.vehicleid === props.selectedVehicle.vehicleid ? selectColor : 'white',
              color: r.vehicleid === props.selectedVehicle.vehicleid ? fontColor : 'black',
              fontWeight: r.vehicleid === props.selectedVehicle.vehicleid && 'bold',
            }}
            onClick={() => menuHandler(r)}
          >
            <div style={{textAlign: 'left'}}>
              <div>Vehicle {r.vehicleid}</div>
              <div style={{fontSize: 12, fontStyle: 'italic'}}>Location: {r.lastknowndata[0].location}</div>
            </div>
          </MenuItem>
        )}
        <div style={{paddingTop: 50, display: props.loading === false && 'none'}}>
          <CircularProgress color={themeColor} />
        </div>
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
  vehicles: [],
  selectedVehicleId: 17,
  clickHandler: () => console.log('clicked vehicle'),
}

export default WindowSize(DesktopSideBar);
