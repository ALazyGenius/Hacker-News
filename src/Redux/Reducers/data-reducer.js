import defaultState from '../State/default-state';
import CONSTANTS from '../../CONSTANTS/constants';

const dataReducer = (state = defaultState, action) => {
    if (action.type === CONSTANTS.DISPLAY_DATA) {
        return {
            ...state,
            api: {
                ...state.api, data: action.payload.data
            }
        }
    }
    return state;
}

export default dataReducer;
