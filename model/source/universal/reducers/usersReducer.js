import { TEST, LOAD_USER } from '../actions/constants';

export default (state={}, action) => {
    switch(action.type){
        case TEST:
            return action.payload
        case LOAD_USER:
            return action.payload
        default:
            return state
    }
}