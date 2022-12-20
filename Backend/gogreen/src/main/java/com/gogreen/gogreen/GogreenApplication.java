package com.gogreen.gogreen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@ComponentScan({"com.gogreen.gogreen.request"})
@EntityScan
//@EnableJpaRepositories("com.gogreen.gogreen.repository")
public class GogreenApplication {

	public static void main(String[] args) {
		SpringApplication.run(GogreenApplication.class, args);
	}

}
