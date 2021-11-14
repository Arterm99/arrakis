import { combineReducers } from 'redux';

import route from './route';
import goods from './goods';

const rootReducer = combineReducers({
  route,
  goods
})

export default rootReducer;