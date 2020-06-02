import defaultState from '../State/default-state';
import CONSTANTS from '../../CONSTANTS/constants';

const dataReducer = (state = defaultState, action) => {
    if (action.type === CONSTANTS.DISPLAY_DATA) {
        return {
            ...state,
            api: {
                ...state.api, data: action.payload.data, result: action.payload.data.hits,
            }
        }
    }
    if (action.type === CONSTANTS.SEARCH_DATA) {
        return {
            ...state,
            api: {
                ...state.api,
                data: {
                    ...state.api.data,
                    hits: action.payload.data
                }
            }
        };
    }
    if (action.type === CONSTANTS.PAGE_UPDATE) {
        return {
            ...state,
            api: {
                ...state.api,
                page: action.payload.pageNumber
            }
        }
    }
    return state;
}

export default dataReducer;
