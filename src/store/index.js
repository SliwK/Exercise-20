import { createStore } from 'redux'; //tutaj jako drugi argument był "applyMiddleware"
//import { createLogger } from 'redux-logger';
import DevTools from '../DevTools';
import reducers from '../reducers/index';

//const logger = createLogger();
const store = createStore(
  reducers,
  DevTools.instrument()
//  applyMiddleware(logger)
);
export default store;
