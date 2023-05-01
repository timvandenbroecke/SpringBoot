package com.hotel.hotel.service;

import com.hotel.hotel.model.User;

public interface UserService {

    User saveUser();

    User findUserByName(String name);


}
