package com.georgemays.exotic_car_inventory.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {

        String username = body.get("username");
        String password = body.get("password");

        if ("admin".equals(username) && "admin123".equals(password)) {

            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "message", "Login successful"
            ));
        }

        return ResponseEntity.status(401).body(Map.of(
                "success", false,
                "message", "Invalid login"
        ));
    }
}