package app.web.pavelk.login5.back1.controller;

import lombok.RequiredArgsConstructor;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class MainController {

    @GetMapping("/1")
    public String a1() {
        return "11";
    }

    @GetMapping("/api/2")
    public String getCurrentUser(KeycloakPrincipal<KeycloakSecurityContext> keycloakPrincipal) {
        return keycloakPrincipal.getKeycloakSecurityContext().getToken().getPreferredUsername();
    }

}
