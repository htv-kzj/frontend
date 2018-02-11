import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import IconButton from 'material-ui/IconButton';
import DirectionBus from 'material-ui/svg-icons/maps/directions-bus';
import GlobalStyle from '../../style.js';

//42°48'53.1"N 73°57'01.1"W
const Map = (props) => {
  return (
    <GoogleMapReact
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    >
      {props.vehicles.map((r) =>
        <IconButton
          onClick={() => props.clickHandler(r.vehicleId)}
          lat={r.latitude}
          lng={r.longitude}
        >
          <DirectionBus
            color={r.vehicleId === props.selectedVehicleId ? GlobalStyle.busColor : GlobalStyle.iconColor}
          />
        </IconButton>
      )}
    </GoogleMapReact>
  );
}

Map.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object),
  clickHandler: PropTypes.func,
  selectedVehicleId: PropTypes.number,
  center: PropTypes.object,
  zoom: PropTypes.number,
}

Map.defaultProps = {
  vehicles: [],
  selectedVehicleId: 17,
  clickHandler: () => console.log('clicked vehicle'),
  center: {lat: 42.814739, lng: -73.950312},
  zoom: 12,
}

export default Map;
