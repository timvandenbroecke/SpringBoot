package com.tim.webshop.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tim.webshop.services.UserService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/user")
@RestController
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //  Return true if user email exists
    @RequestMapping(value = "/emailexists/{email}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> userExists(@PathVariable("email") String email){

        boolean emailExist = this.userService.existsByEmail(email);
        return ResponseEntity.ok(emailExist);
    }


}
