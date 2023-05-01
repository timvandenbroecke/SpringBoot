package com.tim.webshop.services;


import com.tim.webshop.models.Role;
import com.tim.webshop.models.Users;
import com.tim.webshop.repository.RoleRepository;
import com.tim.webshop.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service(value = "userService")
public class UserServiceImpl implements UserDetailsService, UserService{
    private final RoleRepository roleRepository;
    private final UsersRepository userRepository;
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);


    @Lazy
    public UserServiceImpl(RoleRepository roleRepository, UsersRepository userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }




    @Override
    public Users findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public boolean existsByEmail(String email){
        return userRepository.existsByUsername(email);
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("loadUserByUsername: " +  username);
        Users user = userRepository.findByUsername(username);
        System.out.println("loadUserByUsername: user " +  user.getUsername());

        if(user == null){
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(user));
    }

    private Set<SimpleGrantedAuthority> getAuthority(Users user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRole()));
        });
        return authorities;
    }

    public List<Users> findAll() {
        List<Users> list = new ArrayList<>();
        userRepository.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public Users findOne(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public <S extends Users> S saveAndFlush(S entity) {
        return userRepository.saveAndFlush(entity);
    }

    @Override
    public Users save(Users user) {

        //Todo this doesn't seem right
        Users nUser = user;
        nUser.setPassword(passwordEncoder.encode(user.getPassword()));



        Role role = roleRepository.getOne(1L);
        Set<Role> roleSet = new HashSet<>();
        roleSet.add(role);

        nUser.setRoles(roleSet);
        return userRepository.saveAndFlush(nUser);
    }

}
