export const selectVehicle = payload => {
  console.log('action has been fired with payload: ', payload);
  return {
    type: 'SELECTED_TRUCK',
    payload
  }
}

export const sideBarToggled = () => {
  console.log('action has been fired with payload: ');
  return {
    type: 'TOGGLED_SIDEBAR',
  }
}

export const popOverToggled = () => {
  console.log('action has been fired with payload: ');
  return {
    type: 'TOGGLED_POPOVER',
  }
}
