package com.fintrac.springbootwithtsreact.controller;

//import com.fintrac.springbootwithtsreact.service.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//@RestController
//public class RedisController {
//
//    @Autowired
//    private RedisService redisService;
//
//    @PostMapping("api/pushToRedis")
//    public void pushToRedis(@RequestBody Object object) {
//        redisService.saveObjectToRedis("exampleKey", object);
//    }
//}