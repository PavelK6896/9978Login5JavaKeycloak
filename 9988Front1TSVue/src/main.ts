import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Keycloak from "keycloak-js";

const initOptions = {
    url: 'http://localhost:8080/auth',
    realm: 'list2',
    clientId: 'list2'
}

export const keycloak = Keycloak(initOptions)
// createApp(App).use(store).use(router).mount('#app')

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