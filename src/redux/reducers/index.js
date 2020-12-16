import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import repositoriesReducer from './repositoriesReducer';

export default combineReducers({
    Home : homeReducer,  
    Repositories : repositoriesReducer
    }
)