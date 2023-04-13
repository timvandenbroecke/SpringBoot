package com.tim.webshop.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CountryNameDto {

    @JsonProperty("name")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
