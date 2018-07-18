import { combineReducers } from 'redux';
import searchBarReducer from './Components/SearchBar/searchBarReducer';

const rootReducer = combineReducers({
  search: searchBarReducer,
});

export default rootReducer;
