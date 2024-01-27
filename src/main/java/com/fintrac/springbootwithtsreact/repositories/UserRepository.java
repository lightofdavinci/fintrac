package com.fintrac.springbootwithtsreact.repositories;
import com.fintrac.springbootwithtsreact.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}