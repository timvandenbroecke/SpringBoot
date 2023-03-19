package com.tim.webshop.exception;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DefaultExceptionMessage {

    public DefaultExceptionMessage(String message) {
        this.message = message;
    }

    @JsonProperty("message")
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
