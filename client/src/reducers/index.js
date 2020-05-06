import { ADD_TEST } from '../constants/action-types'

const iniitialState = {
    test: []
}

function rootReducer(state = iniitialState, action) {
    if (action.type === ADD_TEST) {
        return Object.assign({}, state, {
            test: state.test.concat(action.payload)
        })
    }
    return state
}

export default rootReducer