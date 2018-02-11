import selectedVehicleMock from './selectedVehicleMock.js';
import vehiclesMock from './vehiclesMock.js';

const defaultState = {
  sideBarToggled: true,
  popOverToggled: true,
  tableToggled: false,
  graphPopToggled: false,
  selectedVehicle: {
    vehicleid: '',
    createdatetime: '',
    lastupdatedatetime: '',
    lastknowneventid: '',
    lastknowndata: [
      {
        longitude: '',
        latitude: '',
        status: '',
        location: ''
      }
    ],
    events: [
      {
      vehicleeventid: '',
      eventtypeid: 91,
      longitude: -73.9269583,
      latitude: 42.8257311,
      starttime: '',
      endtime: '',
      distance: 95595.37,
      createdatetime: '',
      heading: 309.6,
      location: '',
      streetspeed: 0
      },
    ],
  },
};

const eventActions = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECTED_TRUCK':
      return {
        ...state,
        selectedVehicle: action.payload,
      }
    case 'RECIEVED_ALL':
      return {
        ...state,
        vehicles: action.payload.data.vehicles
      }
    case 'TOGGLED_SIDEBAR':
      return {...state, sideBarToggled: !state.sideBarToggled}
    case 'TOGGLED_POPOVER':
      return {...state, popOverToggled: action.payload}
    case 'TOGGLED_TABLE':
      return {...state, tableToggled: action.payload}
    case 'TOGGLED_GRAPHPOP':
      return {...state, graphPopToggled: !state.graphPopToggled}
    default:
      return state
  }
};




export default eventActions;
