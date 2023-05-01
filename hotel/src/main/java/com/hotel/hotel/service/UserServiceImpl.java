package com.hotel.hotel.service;

import com.hotel.hotel.model.User;
import com.hotel.hotel.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service("UserService")
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser() {
        return null;
    }

    @Override
    public User findUserByName(String name) {
        return null;
    }
}
