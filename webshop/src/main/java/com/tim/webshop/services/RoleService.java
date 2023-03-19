package com.tim.webshop.services;

import com.tim.webshop.models.Role;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface RoleService {

    Role findRoleByRole(String role);

    void deleteAllInBatch(Iterable<Role> entities);

    void deleteAllByIdInBatch(Iterable<Long> longs);

    void deleteAllInBatch();

    Role getOne(Long aLong);

    Role getById(Long aLong);

    Role getReferenceById(Long aLong);

    <S extends Role> List<S> findAll(Example<S> example);

    <S extends Role> List<S> findAll(Example<S> example, Sort sort);

}
