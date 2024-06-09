package com.fintrac.springbootwithtsreact.controllers;

import com.fintrac.springbootwithtsreact.models.Account;
import com.fintrac.springbootwithtsreact.services.AccountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/accounts")
public class AccountRestController {
    private final AccountService accountService;
    @Autowired
    public AccountRestController(AccountService accountService) {
        this.accountService = accountService;
    }
    @PostMapping
    public ResponseEntity<?> addAccount(@Valid @RequestBody Account account, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<FieldError> errors = bindingResult.getFieldErrors();
            return ResponseEntity.badRequest().body(errors);
        }
        account.setAccount_number(accountService.generateAccountNumber(17));
        Account savedAccount = accountService.saveAccount(account);
        return ResponseEntity.ok(savedAccount);
    }
    @GetMapping("/{userId}")
    public ResponseEntity<List<Account>> getAccountByUserId(@PathVariable Long userId) {
        List<Account> accounts = accountService.getAccountsByUserId(userId);
        if (!accounts.isEmpty()) {
            return ResponseEntity.ok(accounts);
        } else {
            return ResponseEntity.ok(new ArrayList<>());
        }
    }
}
