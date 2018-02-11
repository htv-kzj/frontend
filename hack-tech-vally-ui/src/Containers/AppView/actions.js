export const selectVehicle = payload => {
  console.log('action has been fired with payload: ', payload);
  return {
    type: 'SELECTED_TRUCK',
    payload
  }
}

export const recievedAll = payload => {
  console.log('we have recieved all: ', payload);
  return {
    type: 'RECIEVED_ALL',
    payload
  }
}

export const sideBarToggled = () => {
  console.log('action has been fired with payload: ');
  return {
    type: 'TOGGLED_SIDEBAR',
  }
}

export const popOverToggled = payload => {
  console.log('action has been fired with payload: ', payload);
  return {
    type: 'TOGGLED_POPOVER',
    payload
  }
}

export const tableToggled = payload => {
  console.log('action has been fired with payload: ', payload);
  return {
    type: 'TOGGLED_TABLE',
    payload
  }
}

export const graphPopToggled = () => {
  console.log('action has been fired with payload: ');
  return {
    type: 'TOGGLED_GRAPHPOP',
  }
}
