import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import "react-placeholder/lib/reactPlaceholder.css";
import registerServiceWorker from './registerServiceWorker';

import Routes from './routes';
import './index.css';
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
