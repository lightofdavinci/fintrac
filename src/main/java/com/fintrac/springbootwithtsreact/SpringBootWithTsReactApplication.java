package com.fintrac.springbootwithtsreact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude={SecurityAutoConfiguration.class}) // temp disable login form while developing
public class SpringBootWithTsReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootWithTsReactApplication.class, args);
	}

}
