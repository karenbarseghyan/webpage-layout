const { RootRef } = require("@material-ui/core");
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer); 

export default store;