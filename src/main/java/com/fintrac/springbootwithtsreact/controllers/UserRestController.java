package com.fintrac.springbootwithtsreact.controllers;

import com.fintrac.springbootwithtsreact.models.User;
import com.fintrac.springbootwithtsreact.dto.RegistrationUserDTO;
import com.fintrac.springbootwithtsreact.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/user")
public class UserRestController {
    private final UserService userService;
    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping
    public ResponseEntity<?> addUser(@Valid @RequestBody User user, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<FieldError> errors = bindingResult.getFieldErrors();
            return ResponseEntity.badRequest().body(errors);
        }
        RegistrationUserDTO savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }
}
