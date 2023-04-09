package com.tim.webshop.controller;
import com.tim.webshop.exception.DefaultExceptionMessage;
import com.tim.webshop.jwt.TokenProvider;
import com.tim.webshop.models.Users;
import com.tim.webshop.models.dto.AuthToken;
import com.tim.webshop.models.dto.GetUserDto;
import com.tim.webshop.models.dto.LoginUser;
import com.tim.webshop.models.dto.UserDto;
import com.tim.webshop.security.AuthenticationFacade;
import com.tim.webshop.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/security")
public class SecurityController {

    private final AuthenticationManager authenticationManager;

    private final TokenProvider jwtTokenUtil;

    private final UserService userService;

    private final AuthenticationFacade authenticationFacade;

    @Autowired
    public SecurityController(AuthenticationManager authenticationManager, TokenProvider jwtTokenUtil, UserService userService, AuthenticationFacade authenticationFacade) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
        this.authenticationFacade = authenticationFacade;
    }

    //  Login authentication
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> generateToken(@RequestBody LoginUser loginUser) throws AuthenticationException {

        try {
            final Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginUser.getUsername(),
                            loginUser.getPassword()
                    )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
            final String token = jwtTokenUtil.generateToken(authentication);
            return ResponseEntity.ok(new AuthToken(token));
        }catch (AuthenticationException e){
            System.out.println("AUTH ERROR");
            return new ResponseEntity<>(new DefaultExceptionMessage("LOGIN_EXCEPTION"), HttpStatus.BAD_REQUEST);

        }
    }

    //  Get user by JWT token
    @RequestMapping(value = "/getuser/{token}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getUserByJwt(@PathVariable("token") String token){

        try {
            final String username = jwtTokenUtil.getUsernameFromToken(token);

            final Users users = userService.findByUsername(username);
            final GetUserDto getUserDto = new GetUserDto(users.getUsername(), users.getFirstname(), users.getLastname(), users.getAddress(), users.getPostcode(), users.getCity(), users.getProvince(), users.getCountry());
            return ResponseEntity.ok(getUserDto);
        }catch(Exception e){

            return ResponseEntity.status(HttpStatus.OK).build();
        }

    }

    //  Register user
    @RequestMapping(value="/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody UserDto userDto){
        try {
            final Users user = new Users(userDto.getUsername(),
                    userDto.getPassword(),
                    userDto.getFirstname(),
                    userDto.getLastname(),
                    userDto.getPostcode(),
                    userDto.getAddress(),
                    userDto.getCity(),
                    userDto.getProvince(),
                    userDto.getCountry()
            );
            final Users response = userService.save(user);
            return  ResponseEntity.ok(response);

        } catch (Exception e){

            return new ResponseEntity<>(new DefaultExceptionMessage("REGISTER_EXCEPTION"), HttpStatus.BAD_REQUEST);
        }

    }

}
