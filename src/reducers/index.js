import { combineReducers } from 'redux';
import userReducer from './userReducer';
import weatherReducer from './weatherReducer';
import musicReducer from './musicReducer';

export default combineReducers({
  weather: weatherReducer,
  user: userReducer,
  music: musicReducer
})
