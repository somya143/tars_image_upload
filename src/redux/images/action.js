import axios from 'axios'
import { get_images_failure, get_images_loading, get_images_success } from './actionTypes';

const client_id = 'OGhed7PnfK1Lh03eh9m8KOhza21hEk_iL7VRQCp_lo4'

export const getData = () => async(dispatch) => {
    dispatch({ type : get_images_loading })
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${client_id}`)
        dispatch({ type : get_images_success , payload : response.data })
        console.log(response.data)
        return response.data
    } catch (error) {
        dispatch({ type: get_images_failure , payload : error.message })
    }
}