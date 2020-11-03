import {READ_JSON, WRITE_JSON} from '../actions/Actions'

const Reducer = (state = [], action) => {
    switch(action.type) {
        case WRITE_JSON:
            return {
                ...state,
                writeData: action.writeData
            }
        case READ_JSON:
            return {
                ...state,
                readData: action.oldData
            }
        default:
           return state;
    }
}

export default Reducer;