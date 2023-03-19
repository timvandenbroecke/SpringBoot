import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

//  Translations
import common_en from "./languages/english.json"
import common_nl from "./languages/dutch.json";
import common_fr from "./languages/french.json";
import common_ch from "./languages/mandarin.json";

//  Redux

import { Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import combineReducers from './redux/reducers';


const store = configureStore({ middleware: [thunk], reducer: combineReducers});



i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      fr: {
          common: common_fr
      },
      nl: {
        common: common_nl
      },
      ch: {
        common: common_ch
      }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
   <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
          <App />
      </Provider>
    </I18nextProvider>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
