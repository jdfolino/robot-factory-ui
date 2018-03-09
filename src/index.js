import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {connect, Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import AppContainer from './containers/AppContainer';
import { reducer } from './reducers';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const ConnectedAppContainer = connect((state) => {return state})(AppContainer)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedAppContainer />
  </Provider>,
  document.getElementById('root'),
);
