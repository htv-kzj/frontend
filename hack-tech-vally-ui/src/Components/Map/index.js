import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import IconButton from 'material-ui/IconButton';
import DirectionBus from 'material-ui/svg-icons/maps/directions-bus';
import GlobalStyle from '../../style.js';
import NavBar from '../NavBar/index.js';
import DataPopover from '../../Components/DataPopover/index.js';
import './style.css'

//42°48'53.1"N 73°57'01.1"W
const Map = (props) => {
  return (
    <div className="map">
      <GoogleMapReact
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {props.vehicles.map((r) =>
          <IconButton
            onClick={() => props.clickHandler(r)}
            lat={r.latitude}
            lng={r.longitude}
            key={r.vehicleId}
          >
            <DirectionBus
              color={r.vehicleId === props.selectedVehicle.vehicleId ? GlobalStyle.busColor : GlobalStyle.iconColor}
            />
          </IconButton>
        )}
      </GoogleMapReact>
      <NavBar
        toggleHandler={props.toggleHandler}
        popOverHandler={props.popOverHandler}
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
  zoom: 12,
}

export default Map;
