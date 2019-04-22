package com.tim.spring_security.repository;

import com.tim.spring_security.model.RoleName;
import com.tim.spring_security.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Roles, Integer> {

    Optional<Roles> findByName(RoleName roleName);
}
