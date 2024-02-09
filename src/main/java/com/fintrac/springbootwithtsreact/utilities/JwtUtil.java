package com.fintrac.springbootwithtsreact.utilities;

import java.util.Date;
import io.jsonwebtoken.*;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;

public class JwtUtil {
    private static final String secretKeyString = System.getenv("JWT_EMAIL_TOKEN");
    private static final byte[] secretKeyBytes = secretKeyString.getBytes(StandardCharsets.UTF_8);
    private static final SecretKey SECRET = new SecretKeySpec(secretKeyBytes, "HmacSHA512");
    private static final long EXPIRATION_TIME = 3_600_000; // 1 hour
    public static String generateToken(String username) {
        return Jwts.builder()
                .issuer("FinTrac")
                .subject(username)
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SECRET)
                .compact();
    }
    public static String extractUsername(String token) {
        try {
            return Jwts.parser()
                .requireIssuer("FinTrac")
                .verifyWith(SECRET)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
        } catch (JwtException e) {
            return "";
        }
    }
}