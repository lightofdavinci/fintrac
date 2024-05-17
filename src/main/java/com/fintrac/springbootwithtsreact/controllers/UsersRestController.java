package com.fintrac.springbootwithtsreact.controllers;

import com.fintrac.springbootwithtsreact.services.UsersService;
import com.fintrac.springbootwithtsreact.models.User;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UsersRestController {
    private final UsersService usersService;
    @Autowired
    public UsersRestController(UsersService usersService) {
        this.usersService = usersService;
    }
    @GetMapping
    public List<User> getAllUsers() {
        return usersService.getAllUsers();
    }
}