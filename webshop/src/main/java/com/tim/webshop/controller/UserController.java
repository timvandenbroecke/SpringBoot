package com.tim.webshop.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tim.webshop.exception.DefaultExceptionMessage;
import com.tim.webshop.models.Users;
import com.tim.webshop.models.dto.GetUserDto;
import com.tim.webshop.models.dto.UserDto;
import com.tim.webshop.security.AuthenticationFacade;
import com.tim.webshop.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/user")
@RestController
public class UserController {

    private final UserService userService;

    private final AuthenticationFacade authenticationFacade;


    public UserController(UserService userService, AuthenticationFacade authenticationFacade) {
        this.userService = userService;
        this.authenticationFacade = authenticationFacade;
    }

    //  Return true if user email exists
    @RequestMapping(value = "/emailexists/{email}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> userExists(@PathVariable("email") String email){

        boolean emailExist = this.userService.existsByEmail(email);
        return ResponseEntity.ok(emailExist);
    }

    @RequestMapping(value = "/update_user", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateUser(@RequestBody GetUserDto userDto) {

        try{
            final String username = authenticationFacade.getAuthentication().getName();
            Users user = userService.findByUsername(username);

            user.setFirstname(userDto.getFirstname());
            user.setLastname(userDto.getLastname());
            user.setAddress(userDto.getAdress());
            user.setPostcode(userDto.getPostcode());
            user.setCity(userDto.getCity());
            user.setProvince(user.getProvince());
            user.setCountry(userDto.getCountry());

            final Users userResponse = userService.save(user);
            final GetUserDto getUserDtoResponse = new GetUserDto(userResponse.getUsername(), userResponse.getFirstname(), userResponse.getLastname(), userResponse.getAddress(), userResponse.getPostcode(), userResponse.getCity(), userResponse.getProvince(), userResponse.getCountry());
            return ResponseEntity.ok(getUserDtoResponse);

        }catch(Exception e){
            return new ResponseEntity<>(new DefaultExceptionMessage("TRANSACTIONAL_EXCEPTION"), HttpStatus.BAD_REQUEST);
        }
    }

}
