const vehiclesMock = [
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
];

const selectedVehicleMock = [
  {
    "Heading" : 51.5,
    "StartTime" : "2018-02-01 06:13:07 +0000",
    "Latitude" : 42.825583,
    "VehicleID" : 17,
    "VehicleEventID" : 4809031,
    "Location" : "Mohawk Hudson Bikeway",
    "StreetSpeed" : 5,
    "Longitude" : -73.928019,
    "EndTime" : "2018-02-01 06:13:07 +0000",
    "Distance" : 8138.71,
    "CreateDateTime" : "2018-02-01 05:13:25 +0000",
    "EventTypeID" : 92
  },
  {
    "Heading" : 352.1,
    "StartTime" : "2018-02-01 06:12:58 +0000",
    "Latitude" : 42.825479,
    "VehicleID" : 17,
    "VehicleEventID" : 4809030,
    "Location" : "Mohawk Hudson Bikeway",
    "StreetSpeed" : 5,
    "Longitude" : -73.92808,
    "EndTime" : "2018-02-01 06:12:58 +0000",
    "Distance" : 8138.69,
    "CreateDateTime" : "2018-02-01 05:13:25 +0000",
    "EventTypeID" : 1
  },
  {
    "Heading" : 187,
    "StartTime" : "2018-02-01 06:12:40 +0000",
    "Latitude" : 42.8254824,
    "VehicleID" : 17,
    "VehicleEventID" : 4809026,
    "Location" : "Unknown Location",
    "StreetSpeed" : 0,
    "Longitude" : -73.9271002,
    "EndTime" : "2018-02-01 06:12:40 +0000",
    "Distance" : 8138.64,
    "CreateDateTime" : "2018-02-01 05:13:25 +0000",
    "EventTypeID" : 92
  },
];

const defaultState = {
  vehicles: vehiclesMock,
  selectedVehicleEvents: selectedVehicleMock,
  selectedVehicleId: 10
};

const eventActions = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECTED_TRUCK':
      return {...state, selectedVehicleId: action.payload}
    default:
      return state
  }
};




export default eventActions;
