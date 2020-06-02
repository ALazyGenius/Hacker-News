import CONSTANTS from "../../CONSTANTS/constants";
import helper from '../../Helpers/helpers';


const dataService = (store) => (next) => (action) => {

    const fetchData = (url) => {
        fetch(url)
            .then(fetchSuccess)
            .then(processResponse)
            .catch(fetchError);

    };

    const fetchSuccess = (response) => response.json();

    const processResponse = (response) => {
        next({
            type: CONSTANTS.DISPLAY_DATA,
            payload: { data: response },
        });
    };

    const fetchError = (error) => {
        console.log(error);
    };
    next(action);


    const url = helper.createUrl(store.getState());
    if (action.type === CONSTANTS.GET_DATA || CONSTANTS.PAGE_UPDATE) {
        fetchData(url);
    }
};

export default dataService;
