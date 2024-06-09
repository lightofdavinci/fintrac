package com.fintrac.springbootwithtsreact.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "accounts", uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "account_type"}))
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(updatable = false, nullable = false)
    private String account_id;
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id")
    private User user;
    @Size(max = 8)
    private String account_type;
    @Size(max = 255)
    @NotBlank(message = "The account name field cannot be empty")
    private String account_name;
    @Size(max = 17)
    private String account_number;
    @DecimalMin("0.00")
    @DecimalMax("999999999999.99")
    private BigDecimal balance;
    @CreationTimestamp
    private LocalDateTime created_at;
    @UpdateTimestamp
    private LocalDateTime updated_at;
    public String getAccount_id() { return account_id; }
    public void setAccount_id(String account_id) { this.account_id = account_id; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
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
    public BigDecimal getBalance() { return balance; }
    public void setBalance(BigDecimal balance) { this.balance = balance; }
    public LocalDateTime getCreated_at() { return created_at; }
    public void setCreated_at(LocalDateTime created_at) { this.created_at = created_at; }
    public LocalDateTime getUpdated_at() { return updated_at; }
    public void setUpdated_at(LocalDateTime updated_at) { this.updated_at = updated_at; }
}
