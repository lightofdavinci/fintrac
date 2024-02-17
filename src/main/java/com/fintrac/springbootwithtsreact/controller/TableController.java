package com.fintrac.springbootwithtsreact.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/delete-table/{table-name}")
public class TableController {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @DeleteMapping
    public String deleteTable(@PathVariable("table-name") String tableName) {
        try {
            jdbcTemplate.execute("DROP TABLE " + tableName);
            return "Table " + tableName + " deleted successfully.";
        } catch (Exception e) {
            return "Error deleting table " + tableName + ": " + e.getMessage();
        }
    }
}