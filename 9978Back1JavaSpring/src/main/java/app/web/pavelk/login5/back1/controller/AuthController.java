package app.web.pavelk.login5.back1.controller;

import app.web.pavelk.login5.back1.dto.request.IdV;
import lombok.RequiredArgsConstructor;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api")
public class AuthController {

    @GetMapping("/1")
    public String getOne() {
        return "one";
    }

    @GetMapping("/2")
    public String getCurrentUser(KeycloakPrincipal<KeycloakSecurityContext> keycloakPrincipal) {
        return keycloakPrincipal.getKeycloakSecurityContext().getToken().getPreferredUsername();
    }

    @DeleteMapping("/2")
    public String deleteCurrentUser(KeycloakPrincipal<KeycloakSecurityContext> keycloakPrincipal, @RequestBody IdV idV) {
        System.out.println("delete " + idV);
        return keycloakPrincipal.getKeycloakSecurityContext().getToken().getPreferredUsername();
    }

    @GetMapping("/3")
    public String three() {
        return "string";
    }


}
