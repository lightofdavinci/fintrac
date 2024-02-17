package com.fintrac.springbootwithtsreact.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fintrac.springbootwithtsreact.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("api/email/verification/{token}")
public class EmailVerificationController {
    private final UserService userService;
    @Autowired
    public EmailVerificationController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping
    public ResponseEntity<?> verifyToken(@PathVariable("token") String token) {
        return userService.verifyEmail(token);
    }
}