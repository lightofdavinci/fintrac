package com.fintrac.springbootwithtsreact.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(updatable = false, nullable = false)
    private String account_id;
    private Long user_id;
    @Size(max = 8)
    private String account_type;
    @Size(max = 255)
    @NotBlank(message = "The account name field cannot be empty")
    private String account_name;
    @Size(max = 17)
    private String account_number;
    public String getAccount_id() { return account_id; }
    public void setAccount_id(String account_id) { this.account_id = account_id; }
    public Long getUser_id() { return user_id; }
    public void setUser_id(Long user_id) { this.user_id = user_id; }
    public @Size(max = 8) String getAccount_type() { return account_type; }
    public void setAccount_type(@Size(max = 8) String account_type) { this.account_type = account_type; }
    public @Size(max = 255) @NotBlank(message = "The account name field cannot be empty") String getAccount_name() {
        return account_name;
    }
    public void setAccount_name(@Size(max = 255) @NotBlank(message = "The account name field cannot be empty") String account_name) {
        this.account_name = account_name;
    }
    public @Size(max = 17) String getAccount_number() { return account_number; }
    public void setAccount_number(@Size(max = 17) String account_number) { this.account_number = account_number; }
}
