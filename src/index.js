import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ToastContainer } from "react-toastify";
import store from './store/store';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const persistor = getPersistor();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar pauseOnHover />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
