import {READ_JSON, WRITE_JSON} from '../actions/Actions'

const Reducer = (state = [], action) => {
    switch(action.type) {
        case WRITE_JSON:
            return {
                ...state,
                inputStore : action.inputJson
            }
        case READ_JSON:
            return {
                ...state,
                resultStore : action.oldStore
            }
        default:
           return state;
    }
}

export default Reducer;