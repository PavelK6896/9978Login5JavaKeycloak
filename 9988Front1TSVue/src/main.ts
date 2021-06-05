import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Keycloak from "keycloak-js";

const initOptions = {
    url: 'http://127.0.0.1:8080/auth',
    realm: 'list-keep',
    clientId: 'list-keep',
    onLoad: 'login-required'
}

export const keycloak = Keycloak(initOptions)

keycloak.init({onLoad: 'login-required'}).then((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        console.log("Authenticated");
        createApp(App).use(store).use(router).mount('#app')
    }

    // setInterval(() => {
    //     keycloak.updateToken(70).then((refreshed) => {
    //         if (refreshed) {
    //             console.log('Token refreshed' + refreshed)
    //         } else {
    //             console.log('Token not refreshed, valid for ' + ' seconds')
    //         }
    //     }).catch(() => {
    //         console.log('Failed to refresh token')
    //     });
    // }, 60000)

}).catch(() => {
    console.log('Authenticated Failed"')
});