import selectedVehicleMock from './selectedVehicleMock.js';
import vehiclesMock from './vehiclesMock.js';

const defaultState = {
  vehicles: vehiclesMock,
  sideBarToggled: true,
  popOverToggled: true,
  tableToggled: false,
  graphPopToggled: false,
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
      return {...state, popOverToggled: !state.popOverToggled}
    case 'TOGGLED_TABLE':
      return {...state, tableToggled: !state.tableToggled}
    case 'TOGGLED_GRAPHPOP':
      return {...state, graphPopToggled: !state.graphPopToggled}
    default:
      return state
  }
};




export default eventActions;
