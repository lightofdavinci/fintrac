package com.fintrac.springbootwithtsreact.services;

import java.util.List;
import com.fintrac.springbootwithtsreact.models.User;
import com.fintrac.springbootwithtsreact.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
    @Autowired
    private UserRepository userRepository;
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}