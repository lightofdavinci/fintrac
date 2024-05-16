//package com.fintrac.springbootwithtsreact.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.redis.core.RedisTemplate;
//import org.springframework.stereotype.Service;
//
//@Service
//public class RedisService {
//
//    @Autowired
//    private RedisTemplate<String, Object> redisTemplate;
//
//    public void saveObjectToRedis(String key, Object value) {
//        redisTemplate.opsForValue().set(key, value);
//    }
//}