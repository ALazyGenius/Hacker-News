import CONSTANTS from '../../CONSTANTS/constants';




const dataService = store => next => action => {
    const fetchData = () => {
        fetch("http://hn.algolia.com/api/v1/search?tags=story").then(fetchSuccess).then(processResponse).catch(fetchError);
    }

    const fetchSuccess = response => response.json();

    const processResponse = response => {
        console.log(response);
        next({
            type: CONSTANTS.DISPLAY_DATA, payload: { data: response }
        })
    }

    const fetchError = error => {
        console.log(error);
    }
    next(action)

    switch (action.type) {
        case CONSTANTS.GET_DATA:
            fetchData();
            break;
        default:
            break;
    }
}

export default dataService