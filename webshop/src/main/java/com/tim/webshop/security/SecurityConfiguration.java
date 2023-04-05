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
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.security.web.session.SessionManagementFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;
import static org.springframework.boot.autoconfigure.security.servlet.PathRequest.toH2Console;

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
                .requestMatchers(HttpMethod.GET, "/index**", "/static/**", "/*.js", "/*.json", "/*.ico", "/*.css", "/*.gif", "/api/store/get_items_total/**", "/api/user/emailexists/**", "/*.html").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/store/get_items").permitAll()
                .requestMatchers(HttpMethod.POST,"/api/security/login", "/api/security/register", "/api/security/authenticate").permitAll()
                .requestMatchers(HttpMethod.GET,  "/login", "/login/**", "/pages/login/**", "/error", "/**", "/watches", "/api/security/getuser/*").permitAll()
                .requestMatchers( "/login", "/login/**", "/pages/login/**", "/error/**", "/").permitAll()
                .requestMatchers(HttpMethod.GET, "/**").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/store/order").hasAnyRole("USER", "ADMIN")
                .requestMatchers(HttpMethod.GET, "/api/store/get_orders").hasAnyRole("USER", "ADMIN")
                .requestMatchers(new AntPathRequestMatcher("/h2-console/**")).permitAll()
                .anyRequest().authenticated()
                .and()
                .httpBasic().authenticationEntryPoint(new NoPopupBasicAuthenticationEntryPoint())
                .and()
                .authenticationManager(authenticationManager)
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.headers().frameOptions().disable();
        http.addFilterBefore(authenticationTokenFilterBean(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    private SessionManagementFilter expiredSessionFilter() {
        SessionManagementFilter smf = new SessionManagementFilter(new HttpSessionSecurityContextRepository());
        smf.setInvalidSessionStrategy((request, response) -> response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Session go BOOM!"));
        return smf;
    }


}