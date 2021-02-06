const initialstate = {
    userData:{},
    isFetching: false,
    isError: false,
    receiveData: false
}

const asyncReducer = (state = initialstate, action) => {
    switch(action.type) {
        case "FETCH_USER":
            return Object.assign({}, state, {
                isFetching: true,
                userData: {}, 
                isError: false,
                receiveData: false
            })
        case "FETCHED_USER":
            return Object.assign({}, state, {
                userData: action.data, 
                isFetching: false,
                isError: false,
                receiveData: true
            })
        case "RECEIVE_ERROR":
            return Object.assign({}, state, {
                isError: true,
                userData: {},
                isFetching: false,
                receiveData: false
            })
        default:
            return state;
    }
}

export default asyncReducer;