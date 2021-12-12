import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const Store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ),
);

export default Store;