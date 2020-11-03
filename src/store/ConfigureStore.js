import rootReducer from '../reducers/Reducer'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { createLogger } from 'redux-logger'

const middlewares = [thunk];

// https://www.npmjs.com/package/redux-logger
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}
 
// enable react developer tools for redux manipulation
const composeEnhancers = composeWithDevTools({});

export default function configureStore() {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
}
