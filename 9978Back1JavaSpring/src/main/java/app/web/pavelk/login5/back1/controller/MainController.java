package app.web.pavelk.login5.back1.controller;

import app.web.pavelk.login5.back1.dto.request.IdV;
import app.web.pavelk.login5.back1.dto.response.IdB;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MainController {

    @GetMapping("/1")
    public String a1() {
        return "11";
    }

    @DeleteMapping("/1")
    public String delete1(@RequestBody List<Object> list) {
        list.forEach((f) -> System.out.println(f));
        System.out.println("delete1");
        return "delete1";
    }


    @DeleteMapping("/2")
    public String delete2(@RequestBody IdV idv) {
        System.out.println(idv);
        System.out.println("delete2");
        try {
            IdV.builder().d1(null).d2(idv.getD1()).build();
        } catch (NullPointerException e) {
            System.out.println("npe");
        }

        return "delete2";
    }

    @DeleteMapping("/3")
    public String delete3(@RequestBody Map<String, Object> map) {
        map.forEach((f, g) -> System.out.println(f + " " + g));
        System.out.println("delete3");
        return "delete3";
    }

    @DeleteMapping("/4")
    public String delete4(@RequestBody String string) {
        System.out.println(string);
        System.out.println("delete4");
        return "delete4";
    }


    @GetMapping("/d1")
    public List<IdB> d1() {
        return List.of(IdB.builder().vOne("1").build(), IdB.builder().vOne("11").build());
    }


}
