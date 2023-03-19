package com.tim.webshop.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUserDto {

    public GetUserDto(String username, String firstname, String lastname, String adress, String postcode, String city, String province, String country) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.adress = adress;
        this.postcode = postcode;
        this.city = city;
        this.province = province;
        this.country = country;
    }

    @JsonProperty(value = "username")
    private String username;

    @JsonProperty(value = "firstname")
    private String firstname;

    @JsonProperty(value = "lastname")
    private String lastname;

    @JsonProperty(value = "adress")
    private String adress;

    @JsonProperty(value = "postcode")
    private String postcode;

    @JsonProperty(value = "city")
    private String city;

    @JsonProperty(value = "province")
    private String province;

    @JsonProperty(value = "country")
    private String country;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
