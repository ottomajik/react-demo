import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducers';
import myMiddleware from '../middleware/middleware.js';
import promiseMiddleware from '../middleware/promiseMiddleware.js';
import initialState from './initialState.js';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleWare,
    myMiddleware,
    promiseMiddleware
)(createStore);

export default function initStore() {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

