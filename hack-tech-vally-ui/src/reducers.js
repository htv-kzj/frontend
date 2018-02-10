import { combineReducers } from 'redux';
import vehicleEvent from './Containers/AppView/reducers';

const todoApp = combineReducers({
  vehicleEvent,
});

export default todoApp;
