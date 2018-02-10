export const selectVehicle = payload => {
  console.log('action has been fired with payload: ', payload);
  return {
    type: 'SELECTED_TRUCK',
    payload
  }
}
