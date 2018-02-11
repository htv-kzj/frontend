const vehiclesMock = [
  {
    vehicleId: 17,
    latitude: '42.825583',
    longitude: '-73.928019',
    location: 'Mohawk Hudson Bikeway',
    eventStatus: 'Stopped',
    milesTraveled: '8138.71',
    expectedTime: '12:30pm',
    idleTime: '32m',
  },
  {
    vehicleId : 10,
    latitude: '42.830081',
    longitude: '-73.950404',
    location: '206 Washington Ave',
    eventStatus: 'Driving',
    milesTraveled: '52985',
    expectedTime: '3:30am',
    idleTime: '72m'
  },
];

const selectedVehicleMock = {
  vehicleId: 17,
  latitude: '42.825583',
  longitude: '-73.928019',
  location: 'Mohawk Hudson Bikeway',
  eventStatus: 'Stopped',
  milesTraveled: '8138.71',
  expectedTime: '12:30pm',
  idleTime: '32m',
};

const defaultState = {
  vehicles: vehiclesMock,
  sideBarToggled: true,
  selectedVehicle: selectedVehicleMock,
};

const eventActions = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECTED_TRUCK':
      return {
        ...state,
        selectedVehicle: action.payload,
      }
    case 'TOGGLED_SIDEBAR':
      return {...state, sideBarToggled: !state.sideBarToggled}
    default:
      return state
  }
};




export default eventActions;
