import {INCREMENT_COUNTER, DECREMENT_COUNTER}  from '../actions/homeActions'

const initialState = {
    counter : 0,
};

function homeReducer(state = initialState, action)  {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                counter : state.counter + 1
            }
        case DECREMENT_COUNTER:
            return {
                counter : state.counter - 1
        }
    }
    return state;
}

export default homeReducer;