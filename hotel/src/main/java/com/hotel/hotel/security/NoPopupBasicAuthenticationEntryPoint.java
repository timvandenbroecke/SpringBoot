package com.hotel.hotel.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.naming.AuthenticationException;
import java.io.IOException;

public class NoPopupBasicAuthenticationEntryPoint implements AuthenticationEntryPoint {



    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, org.springframework.security.core.AuthenticationException authException) throws IOException, ServletException {
        System.out.println(authException.getMessage());
         response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());

    }
}
