import { ADD_TEST, GET_REVIEWS } from '../constants/action-types'
import axios from 'axios'


export function addTest(payload) {
    console.log('addTest works')
    return {
        type: ADD_TEST,
        payload
    }
}

export const getReviews = () => (dispatch) => {
    //will later need to change endpoint so that it changes with state
    return axios.get('/reviews/1')
        .then(({ data }) => {
            return dispatch({ type: GET_REVIEWS, payload: data })
        })
        .catch(err => console.log('failed to get reviews. ERROR-->', err))
}