import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import IconButton from 'material-ui/IconButton';
import DirectionBus from 'material-ui/svg-icons/maps/directions-bus';
import Pin from 'material-ui/svg-icons/action/room';
import {green500, green200} from 'material-ui/styles/colors';
import GlobalStyle from '../../style.js';
import NavBar from '../NavBar/index.js';
import DataPopover from '../../Components/DataPopover/index.js';
import TablePopover from '../../Components/TablePopover/index.js';
import './style.css'

const precisionRound = (number, precision) => {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

const Map = (props) => {
  console.log(props.selectedVehicle.events[0].distance);
  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        center={{lat: props.selectedVehicle.lastknowndata[0].latitude, lng: props.selectedVehicle.lastknowndata[0].longitude}}
      >
        {props.selectedVehicle && props.selectedVehicle.events.map((r) =>
          <IconButton
            lat={r.latitude}
            lng={r.longitude}
            key={r.starttime}
            style={{display: r.starttime === props.selectedVehicle.lastupdatedatetime ? 'none' : 'block'}}
          >
            <Pin
              color={green200}
            />
          </IconButton>
        )}
        {props.vehicles.map((r) =>
          <IconButton
            onClick={() => props.clickHandler(r)}
            lat={r.lastknowndata[0].latitude}
            lng={r.lastknowndata[0].longitude}
            key={r.vehicleid}
          >
            <DirectionBus
              color={r.vehicleid === props.selectedVehicle.vehicleid ? green500 : 'grey'}
            />
          </IconButton>
        )}
      </GoogleMapReact>
      <NavBar
        toggleHandler={props.toggleHandler}
        popOverHandler={props.popOverHandler}
        tableHandler={props.tableHandler}
        popOverToggled={props.popOverToggled}
        tableToggled={props.tableToggled}
        graphPopHandler={props.graphPopHandler}
        graphPopToggled={props.graphPopToggled}
      />
      <DataPopover
        vehicleId={props.selectedVehicle.vehicleid}
        eventStatus={props.selectedVehicle.lastknowndata[0].status}
        milesTraveled={precisionRound(props.selectedVehicle.events[0].distance - props.selectedVehicle.events[props.selectedVehicle.events.length - 1].distance, 2)}
        isToggled={props.isToggled}
        popOverToggled={props.popOverToggled}
      />
      <TablePopover
        tableToggled={props.tableToggled}
        vehicles={props.vehicles}
        loading={props.loading}
      />
    </div>
  );
}

Map.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object),
  clickHandler: PropTypes.func,
  toggleHandler: PropTypes.func,
  selectedVehicle: PropTypes.object,
  center: PropTypes.object,
  zoom: PropTypes.number,
}

Map.defaultProps = {
  vehicles: [],
  selectedVehicle: {
    vehicleid: 0,
  },
  clickHandler: () => console.log('clicked vehicle'),
  toggleHandler: () => console.log('clicked vehicle'),
  center: {lat: 42.814739, lng: -73.950312},
  zoom: 15,
}

export default Map;
