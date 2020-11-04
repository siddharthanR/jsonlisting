export const READ_JSON = 'READ_JSON'
export const WRITE_JSON = 'WRITE_JSON'

export function storeJson(inputJson){
    return function(dispatch) {
        dispatch({
            type: WRITE_JSON,
            writeData: inputJson
        })
    }
}

export function readJson() {
    return function(dispatch, getState) {
        let oldData = getState().writeData ? getState().writeData : [];
        dispatch({
            type: READ_JSON,
            oldData
        })
    }
}