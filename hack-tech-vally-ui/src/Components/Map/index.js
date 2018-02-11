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
import AnalyticsPopover from '../../Components/AnalyticsPopover/index.js';
import './style.css'

const Map = (props) => {
  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={props.center}
        center={{
          lat: props.selectedVehicle.latitude,
          lng: props.selectedVehicle.longitude,
        }}
        defaultZoom={props.zoom}
      >
        {props.selectedVehicle.eventList.map((r) =>
          <IconButton
            lat={r.latitude.toString()}
            lng={r.longitude.toString()}
            key={r.StartTime}
            style={{display: r.StartTime === props.selectedVehicle.StartTime ? 'none' : 'block'}}
          >
            <Pin
              color={green200}
            />
          </IconButton>
        )}
        {props.vehicles.map((r) =>
          <IconButton
            onClick={() => props.clickHandler(r)}
            lat={r.latitude}
            lng={r.longitude}
            key={r.vehicleId}
          >
            <DirectionBus
              color={r.vehicleId === props.selectedVehicle.vehicleId ? green500 : 'grey'}
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
        analyticsHandler={props.analyticsHandler}
        analyticsToggled={props.analyticsToggled}
      />
      <DataPopover
        vehicleId={props.selectedVehicle.vehicleId}
        eventStatus={props.selectedVehicle.eventStatus}
        milesTraveled={props.selectedVehicle.milesTraveled}
        expectedTime={props.selectedVehicle.expectedTime}
        idleTime={props.selectedVehicle.idleTime}
        isToggled={props.isToggled}
        popOverToggled={props.popOverToggled}
      />
      <TablePopover
        tableToggled={props.tableToggled}
        vehicles={props.vehicles}
      />
      <AnalyticsPopover
        analyticsToggled={props.analyticsToggled}
      />
    </div>
  );
}

Map.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object),
  clickHandler: PropTypes.func,
  toggleHandler: PropTypes.func,
  selectedVehicleId: PropTypes.number,
  center: PropTypes.object,
  zoom: PropTypes.number,
}

Map.defaultProps = {
  vehicles: [],
  selectedVehicleId: 17,
  clickHandler: () => console.log('clicked vehicle'),
  toggleHandler: () => console.log('clicked vehicle'),
  center: {lat: 42.814739, lng: -73.950312},
  zoom: 15,
}

export default Map;
