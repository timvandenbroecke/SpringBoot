package com.tim.webshop.services;


import com.tim.webshop.models.Role;
import com.tim.webshop.repository.RoleRepository;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "roleService")
public class RoleServiceImpl implements RoleService{
    private final RoleRepository roleRepository;

    @Lazy
    public RoleServiceImpl(RoleRepository roleRepository) {

        this.roleRepository = roleRepository;
    }

    @Override
    public Role findRoleByRole(String role_) {
        Role role = roleRepository.findRoleByRole(role_);
        return role;
    }

    @Override
    public void deleteAllInBatch(Iterable<Role> entities) {
        roleRepository.deleteAllInBatch(entities);
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {
        roleRepository.deleteAllByIdInBatch(longs);
    }

    @Override
    public void deleteAllInBatch() {
        roleRepository.deleteAllInBatch();
    }

    @Override
    public Role getOne(Long aLong) {
        return roleRepository.getOne(aLong);
    }

    @Override
    public Role getById(Long aLong) {
        return roleRepository.getById(aLong);
    }

    @Override
    public Role getReferenceById(Long aLong) {
        return roleRepository.getReferenceById(aLong);
    }

    @Override
    public <S extends Role> List<S> findAll(Example<S> example) {
        return roleRepository.findAll(example);
    }

    @Override
    public <S extends Role> List<S> findAll(Example<S> example, Sort sort) {
        return roleRepository.findAll(example, sort);
    }
}
