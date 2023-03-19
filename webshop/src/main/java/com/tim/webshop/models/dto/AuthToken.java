package com.tim.webshop.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthToken {

    public AuthToken(String token) {
        this.token = token;
    }

    @JsonProperty(value = "token")
    private String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
