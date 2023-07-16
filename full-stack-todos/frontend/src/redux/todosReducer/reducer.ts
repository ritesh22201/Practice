import { GET_TODOS, GET_TODOS_FAILURE, GET_TODOS_SUCCESS } from "./actionTypes";

const initialState = {
    data : [],
    isLoading : false,
    isError : false,
    errorMsg : ''
}

type Action = {
    type : string;
    payload : string;
}

export const reducer = (state = initialState, {type, payload}:Action) => {
    switch(type){
        case GET_TODOS : {
            return {
                ...state,
                isLoading : true
            }
        }

        case GET_TODOS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                data : payload
            }
        }

        case GET_TODOS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                iError : true,
                errorMsg : payload
            }
        }

        default : {
            return state;
        }
    }
}