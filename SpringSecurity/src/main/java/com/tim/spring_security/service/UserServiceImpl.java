package com.tim.spring_security.service;

import com.tim.spring_security.model.User;
import com.tim.spring_security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepo;

    //Get all users
    @Transactional
    public List<User> getAllUsers(){

        return userRepo.findAll();
    }

    //Save user or update
    @Transactional
    @Modifying
    public void saveUser(User user){

        userRepo.save(user);
    }

    //Delete user
    @Transactional
    @Modifying
    public void deleteUser(User user){

        userRepo.delete(user);
    }
}
