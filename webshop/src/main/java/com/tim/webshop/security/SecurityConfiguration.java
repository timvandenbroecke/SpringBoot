package com.tim.webshop.security;

import com.tim.webshop.jwt.JwtAuthenticationFilter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.session.SessionManagementFilter;

import javax.naming.AuthenticationException;
import java.io.IOException;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration {

    @Autowired
    UserDetailsService userDetailsService;

    AuthenticationManager authenticationManager;


    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public JwtAuthenticationFilter authenticationTokenFilterBean() throws Exception {
        return new JwtAuthenticationFilter();
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService);
        authenticationManager = authenticationManagerBuilder.build();

        http.csrf().disable().cors().and()
                .authorizeHttpRequests()
                .requestMatchers(HttpMethod.GET, "/index*", "/static/**", "/*.js", "/*.json", "/*.ico", "/*.css", "/*.gif", "/h2-ui/**", "/api/store/get_items_total/**", "/api/user/emailexists/**").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/store/get_items").permitAll()
                .requestMatchers(HttpMethod.POST,"/api/security/login", "/api/security/register", "/api/security/authenticate").permitAll()
                .requestMatchers(HttpMethod.GET, "/h2-ui/**", "/login", "/login/**", "/pages/login/**", "/error", "/**", "/watches", "/api/security/getuser/*").permitAll()
                .requestMatchers( "/h2-ui/**", "/login", "/login/**", "/pages/login/**", "/error").permitAll()
                .requestMatchers(HttpMethod.GET, "/**").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/store/order").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
                .and()
                //.httpBasic().authenticationEntryPoint(new NoPopupBasicAuthenticationEntryPoint())
                //.and()
                .authenticationManager(authenticationManager)
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(authenticationTokenFilterBean(), UsernamePasswordAuthenticationFilter.class);
        http.headers().frameOptions().disable();

        return http.build();
    }

    private SessionManagementFilter expiredSessionFilter() {
        SessionManagementFilter smf = new SessionManagementFilter(new HttpSessionSecurityContextRepository());
        smf.setInvalidSessionStrategy((request, response) -> response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Session go BOOM!"));
        return smf;
    }


}