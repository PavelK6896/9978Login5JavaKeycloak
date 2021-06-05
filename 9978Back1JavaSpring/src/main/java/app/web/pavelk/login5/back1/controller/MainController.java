package app.web.pavelk.login5.back1.controller;

import app.web.pavelk.login5.back1.responseDto.IdV;
import lombok.RequiredArgsConstructor;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MainController {

    @GetMapping("/1")
    public String a1() {
        return "11";
    }

    @GetMapping("/api/2")
    public String getCurrentUser(KeycloakPrincipal<KeycloakSecurityContext> keycloakPrincipal) {
        return keycloakPrincipal.getKeycloakSecurityContext().getToken().getPreferredUsername();
    }

    @DeleteMapping("/api/2")
    public String deleteCurrentUser(KeycloakPrincipal<KeycloakSecurityContext> keycloakPrincipal, @RequestBody IdV idV) {
        System.out.println("delete " + idV);
        return keycloakPrincipal.getKeycloakSecurityContext().getToken().getPreferredUsername();
    }

}
