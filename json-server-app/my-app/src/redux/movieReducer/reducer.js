
const initialState = {
    isLoading : false,
    isError : false,
    movies : []
}

export const reducer = (state = initialState, {type , payload}) => {
    switch(type){
        default : {
            return state;
        }
    }
}