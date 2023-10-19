import { get_images_failure, get_images_loading, get_images_success } from "./actionTypes"

const initialState = {
    images_data : [],
    isLoading : false,
    isError : false
}

const imagesReducer = (state=initialState , {type , payload}) => {
    switch(type){
        case get_images_loading : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }
        case get_images_success : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                images_data : [...payload.images]
            }
        }
        case get_images_failure : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        default : return state
    }
}

export default imagesReducer;