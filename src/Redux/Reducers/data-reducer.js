import defaultState from '../State/default-state';
import CONSTANTS from '../../CONSTANTS/constants';

const dataReducer = (state = defaultState, action) => {
    if (action.type === CONSTANTS.DISPLAY_DATA) {
        console.log("action", action);
        console.log(state);
        const obj = { ...state }
        console.log(obj);
    }
    return state;
}

export default dataReducer;
