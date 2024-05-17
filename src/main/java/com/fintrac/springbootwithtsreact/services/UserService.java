package com.fintrac.springbootwithtsreact.services;

import java.time.LocalDate;
import java.time.LocalDateTime;
import com.fintrac.springbootwithtsreact.models.User;
import com.fintrac.springbootwithtsreact.dto.RegistrationUserDTO;
import com.fintrac.springbootwithtsreact.repository.UserRepository;
import com.fintrac.springbootwithtsreact.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {
    private final EmailService emailService;
    @Autowired
    public UserService(EmailService emailService) {
        this.emailService = emailService;
    }
    @Autowired
    private UserRepository userRepository;
    public RegistrationUserDTO saveUser(User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new IllegalArgumentException("Username already exists");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        String verificationToken = JwtUtil.generateToken(user.getUsername());

        // Send verification email
        String emailSubject = "Fintrac Account Verification";
        String emailBody = "Dear " + user.getFirst_name() + " " + user.getLast_name() +
            ",\n\nPlease click the following link to verify your account: " +
            "https://fintrac.onrender.com/verify-email/" + verificationToken;
        emailService.sendVerificationEmail(user.getEmail(), emailSubject, emailBody);

        // Save the user to the database
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        user.setToken(verificationToken);
        user.setCreated_at(LocalDateTime.now());
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