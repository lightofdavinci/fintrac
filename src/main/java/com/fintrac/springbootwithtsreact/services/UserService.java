package com.fintrac.springbootwithtsreact.services;

import java.time.LocalDate;
import java.time.LocalDateTime;
import com.fintrac.springbootwithtsreact.models.User;
import com.fintrac.springbootwithtsreact.dto.RegistrationUserDTO;
import com.fintrac.springbootwithtsreact.repositories.UserRepository;
import com.fintrac.springbootwithtsreact.utilities.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public RegistrationUserDTO saveUser(User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new IllegalArgumentException("Username already exists");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        user.setToken(JwtUtil.generateToken(user.getUsername()));
        user.setCreated_at(LocalDateTime.now());
        // Save the user to the database
        User savedUser = userRepository.save(user);
        return mapToUserDTO(savedUser);
    }
    private RegistrationUserDTO mapToUserDTO(User user) {
        RegistrationUserDTO userDTO = new RegistrationUserDTO();
        userDTO.setUsername(user.getUsername());
        userDTO.setFirst_name(user.getFirst_name());
        userDTO.setLast_name(user.getLast_name());
        userDTO.setCreated_at(user.getCreated_at());
        userDTO.setEmail(user.getEmail());
        return userDTO;
    }
    public ResponseEntity<?> verifyEmail(String token) {
        String username = JwtUtil.extractUsername(token);
        if (username.isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("{\"statusCode\": 403, \"message\": \"Invalid token.\"}");
        }
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, String.format("User with username '" + username + "' not found"))
            );
        if (user.getToken() == null) {
            return ResponseEntity.ok("{\"statusCode\": 200, \"message\": \"User has been already activated\"}");
        }
        user.setToken(null);
        user.setVerified(true);
        user.setVerified_at(LocalDate.now());
        user.setUpdated_at(LocalDateTime.now());
        userRepository.save(user);
        return ResponseEntity.ok("{\"statusCode\": 200, \"message\": \"User was successfully activated\"}");
    }
}