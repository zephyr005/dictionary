import { SEARCH_DATA, STORE_DATA, ERROR, CLEAR_SEARCH_DATA  } from "./actionType";
import axios from "axios";


export const searchData = () => {
    return {
        type: SEARCH_DATA,
    }
}

export const storeData = (data) => {
    return {
        type: STORE_DATA,
        payload: data
    }
}

export const errorHandle = () => {
    return {
        type: ERROR,
        payload: true
    }
}

export const clearSearchData = () => {
    return{
        type: CLEAR_SEARCH_DATA
    }
}

export const fetchData = (word) => {
    return async function (dispatch) {
        dispatch(searchData())
        try {
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!data) { 
                throw new Error("No Data Found") ;
            }
            dispatch(storeData(data.data));
        } catch (err) {
            dispatch(errorHandle());
        }
    }
}

