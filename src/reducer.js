import { combineReducers } from 'redux';
import templateReducers from './components/biz/template/reducer';

export default combineReducers({
  ...templateReducers,
});
