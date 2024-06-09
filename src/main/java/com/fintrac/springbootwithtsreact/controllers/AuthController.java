package com.fintrac.springbootwithtsreact.controllers;

import com.fintrac.springbootwithtsreact.models.User;
import com.fintrac.springbootwithtsreact.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
public class AuthController {
    private final RedisTemplate<String, Long> redisTemplate;
    private final AuthService authService;
    @Autowired
    public AuthController(AuthService authService, RedisTemplate<String, Long> redisTemplate) {
        this.authService = authService;
        this.redisTemplate = redisTemplate;
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@Valid @RequestBody User user, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<FieldError> errors = bindingResult.getFieldErrors();
            return ResponseEntity.badRequest().body(errors);
        }
        // temp auth
        Long userId = authService.signInUser(user.getUsername());
        redisTemplate.opsForValue().set("userId", userId);
        Long userTest = redisTemplate.opsForValue().get("userId");
        System.out.println(userTest);
        redisTemplate.delete("userId");
        return ResponseEntity.ok("{\"statusCode\": 200, \"message\": " + userId + "}");
    }
}
