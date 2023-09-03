import { SEARCH_DATA, STORE_DATA, ERROR, CLEAR_SEARCH_DATA } from "../action/actionType";

let initialState = {
    loading: false,
    input: "",
    data: "",
    storeData: [],
    error: null
}

const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_DATA:
            return {
                ...state, loading: true, data: "", error: null
            }
        case STORE_DATA: {
            return {
                ...state, loading: false, error: null, data: [action.payload], storeData:[...state.storeData, action.payload]
            }
        }
        case ERROR: {
            return {
                ...state, loading: false, error: true
            }
        }
        case CLEAR_SEARCH_DATA: {
            return {
                ...state, data: ""
            }
        }
        default: {
            return state;
        }
    }
}

export default wordReducer