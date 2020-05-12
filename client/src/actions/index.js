import { ADD_TEST, GET_REVIEWS, SORT_STAR } from '../constants/action-types'
import axios from 'axios'


export function addTest(payload) {
    console.log('addTest works')
    return {
        type: ADD_TEST,
        payload
    }
}

export const getReviews = () => (dispatch, getState) => {
    const { sort, sku } = getState()
    return axios.get(`${sort}/${sku}`)
        .then(({ data }) => dispatch({ type: GET_REVIEWS, payload: data }))
        .catch(err => console.log('failed to get reviews. ERROR-->', err))
}

export function sortByStar(payload) {
    return {
        type: SORT_STAR,
        payload
    }
}