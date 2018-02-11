import selectedVehicleMock from './selectedVehicleMock.js';
import vehiclesMock from './vehiclesMock.js';

const defaultState = {
  vehicles: vehiclesMock,
  sideBarToggled: true,
  popOverToggled: true,
  tableToggled: false,
  graphPopToggled: false,
  analyticsToggled: false,
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
    case 'TOGGLED_POPOVER':
      return {...state, popOverToggled: action.payload}
    case 'TOGGLED_TABLE':
      return {...state, tableToggled: action.payload}
    case 'TOGGLED_ANALYTICS':
      return {...state, analyticsToggled: action.payload}
    default:
      return state
  }
};




export default eventActions;
