import React from 'react';
import ReactDOM from 'react-dom';
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import  messagesPt  from "./locales/pt/messages.js";
import  messagesFr  from "./locales/fr/messages.js";
import  messagesEn  from "./locales/en/messages.js";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sentry';

i18n.load("pt", messagesPt.messages);
i18n.load("fr", messagesFr.messages);
i18n.load("en", messagesEn.messages);
i18n.activate("en");

ReactDOM.render(
  <React.StrictMode>
      <I18nProvider i18n={i18n}>

      <App />
      </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
