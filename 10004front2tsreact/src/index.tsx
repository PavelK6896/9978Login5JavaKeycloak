import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store/store";
import Keycloak from 'keycloak-js'
import {ReactKeycloakProvider} from '@react-keycloak/web'

const initOptions = {
    url: 'http://localhost:8080/auth',
    realm: 'list2',
    clientId: 'list3'
}

export const keycloak = Keycloak(initOptions)

ReactDOM.render(
    <React.StrictMode>
        <ReactKeycloakProvider authClient={keycloak} initOptions={{onLoad: 'login-required'}}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ReactKeycloakProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
