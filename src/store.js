import { createStore } from 'redux';
import { rootReducer } from 'src/reducers';

const INIT_STATE = {isOtpValid: false};
export const store = createStore(
  rootReducer,
  INIT_STATE,
  (process.env.NODE_ENV === 'development') && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);