package com.tim.spring_security.service;

import com.tim.spring_security.model.User;

import java.util.List;

public interface UserService {

    public List<User> getAllUsers();

    public void saveUser(User user);

    public void deleteUser(User user);
}
