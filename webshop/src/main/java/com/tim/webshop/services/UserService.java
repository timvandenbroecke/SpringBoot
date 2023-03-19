package com.tim.webshop.services;


import com.tim.webshop.models.Users;

import java.util.List;

public interface UserService {

    Users save(Users user);
    List<Users> findAll();
    Users findOne(String username);

    <S extends Users> S saveAndFlush(S entity);

    Users findByUsername(String username);

    boolean existsByEmail(String email);
}

