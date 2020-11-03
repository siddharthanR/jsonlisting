export const READ_JSON = 'READ_JSON'
export const WRITE_JSON = 'WRITE_JSON'

export function storeJson(inputJson){
    return function(dispatch) {
        dispatch({
            type: WRITE_JSON,
            inputJson
        })
    }
}

export function readJson() {
    return function(dispatch, getState) {
        let oldStore = getState().inputStore ? getState().inputStore : [];
        dispatch({
            type: READ_JSON,
            oldStore
        })
    }
}