import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from 'src/store';
import './index.scss';
import App from './App';
import registerServiceWorker, { unregister } from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
unregister();
registerServiceWorker();
