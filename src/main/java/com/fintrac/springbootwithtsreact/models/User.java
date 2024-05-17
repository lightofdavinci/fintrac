package com.fintrac.springbootwithtsreact.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    private Long user_id;
    @NotBlank(message = "The first name field cannot be empty")
    private String first_name;
    @NotBlank(message = "The last name field cannot be empty")
    private String last_name;
    @NotBlank(message = "The username field cannot be empty")
    @Column(unique=true)
    private String username;
    @Email
    @Size(max = 255)
    @NotBlank(message = "The email field cannot be empty")
    @Column(unique=true)
    private String email;
    @NotBlank(message = "The password field cannot be empty")
    private String password;
    private String token;
    @Column(columnDefinition = "BOOLEAN DEFAULT false")
    private boolean verified;
    @Column(columnDefinition = "DATE")
    private LocalDate verified_at;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime created_at;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime updated_at;
    public Long getUser_id() {
        return user_id;
    }
    public void setUser_id(Long user_id) { this.user_id = user_id; }
    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }
    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
    public boolean getVerified() {
        return verified;
    }
    public void setVerified(boolean verified) {
        this.verified = verified;
    }
    public LocalDate getVerified_at() {
        return verified_at;
    }
    public void setVerified_at(LocalDate verified_at) {
        this.verified_at = verified_at;
    }
    public LocalDateTime getCreated_at() {
        return created_at;
    }
    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }
    public LocalDateTime getUpdated_at() {
        return updated_at;
    }
    public void setUpdated_at(LocalDateTime updated_at) {
        this.updated_at = updated_at;
    }
}