package com.fintrac.springbootwithtsreact.services;

import com.fintrac.springbootwithtsreact.models.Account;
import com.fintrac.springbootwithtsreact.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;
    public Account saveAccount(Account account) {
        // Save the account to the database
        return accountRepository.save(account);
    }
    public List<Account> getAccountsByUserId(Long userId) {
        return accountRepository.findByUserId(userId);
    }
    public String generateAccountNumber(int length) {
        StringBuilder accountNumber = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < length; i++) {
            accountNumber.append(random.nextInt(10)); // 0-9
        }
        return accountNumber.toString();
    }
}