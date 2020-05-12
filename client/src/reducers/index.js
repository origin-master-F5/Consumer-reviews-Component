import { ADD_TEST, GET_REVIEWS, SORT_STAR } from '../constants/action-types'

const iniitialState = {
    test: [],
    reviews: [],
    sku: 1,
    sort: '/reviews',
    starSort: false,
    sortingStar: 0,
    verified: false
}

function rootReducer(state = iniitialState, action) {
    if (action.type === ADD_TEST) {
        return {
            ...state,
            test: state.test.concat(action.payload)
        }
    }

    if (action.type === GET_REVIEWS) {
        return {
            ...state,
            reviews: state.reviews.concat(action.payload)
        }
    }

    if (action.type === SORT_STAR) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state
}

export default rootReducer