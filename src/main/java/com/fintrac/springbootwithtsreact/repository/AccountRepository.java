package com.fintrac.springbootwithtsreact.repository;

import com.fintrac.springbootwithtsreact.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface AccountRepository extends JpaRepository<Account, Long> {
    @Query(value = "SELECT * FROM accounts WHERE user_id = :user_id", nativeQuery = true)
    List<Account> findByUserId(@Param("user_id") Long userId);
}
