package com.tim.webshop.models.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.tim.webshop.models.Orders;
import com.tim.webshop.models.Users;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;

import java.util.Set;

public class UserDto {
    public UserDto() {
    }

    public UserDto(String username, String password, String firstname, String lastname, String postcode, String address, String city, String province, String country) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.postcode = postcode;
        this.address = address;
        this.city = city;
        this.province = province;
        this.country = country;
    }

    public UserDto(String username, String password) {
        this.username = username;
        this.password = password;
    }

    @JsonProperty(value = "username")
    private String username;
    @JsonProperty(value = "password")
    private String password;

    @JsonProperty(value = "firstname")
    private String firstname;

    @JsonProperty(value = "lastname")
    private String lastname;

    @JsonProperty(value = "postcode")
    private String postcode;

    @JsonProperty(value = "address")
    private String address;

    @JsonProperty(value = "city")
    private String city;

    @JsonProperty(value = "province")
    private String province;

    @JsonProperty(value = "country")
    private String country;


    public Users getUserFromDto(){
        Users user = new Users();
        user.setUsername(username);
        user.setPassword(password);


        return user;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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