package com.tim.webshop.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tim.webshop.models.Users;
import com.tim.webshop.models.dto.RegisterDto;
import com.tim.webshop.services.UserService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@AutoConfigureMockMvc
public class SecurityControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserService userService;



    //  Register user and response of user must be correct
    @Test
    void registerUser() throws Exception{

        final RegisterDto registerDto = new RegisterDto("user@mail.com", "password", "John", "Doe", "2018", "Marnixplaats 18", "Antwerpen", "Antwerpen", "Belgium");

        mockMvc.perform(post("/api/security/register")
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(objectMapper.writeValueAsString(registerDto))).andExpect(status().isOk());

        final Users users = userService.findByUsername("user@mail.com");

        assertThat(users.getUsername()).isEqualTo("user@mail.com");
        assertThat(users.getFirstname()).isEqualTo("John");
        assertThat(users.getLastname()).isEqualTo("Doe");
        assertThat(users.getPostcode()).isEqualTo("2018");
        assertThat(users.getAddress()).isEqualTo("Marnixplaats 18");
        assertThat(users.getCity()).isEqualTo("Antwerpen");
        assertThat(users.getProvince()).isEqualTo("Antwerpen");
        assertThat(users.getCountry()).isEqualTo("Belgium");

    }
}
