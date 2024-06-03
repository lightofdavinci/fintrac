package com.fintrac.springbootwithtsreact.services;

import com.fintrac.springbootwithtsreact.models.User;
import com.fintrac.springbootwithtsreact.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;
    public Long signInUser(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, String.format("User with username '" + username + "' not found"))
                );
        return user.getUser_id();
    }
}