package com.tim.webshop.repository;

import com.tim.webshop.models.Role;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query(value = "SELECT * From role r WHERE r.role = :role",nativeQuery = true)
    Role findRoleByRole(@Param("role") String role);

    @Override
    void flush();

    @Override
    <S extends Role> S saveAndFlush(S entity);

    @Override
    <S extends Role> List<S> saveAllAndFlush(Iterable<S> entities);

    @Override
    void deleteAllInBatch(Iterable<Role> entities);

    @Override
    void deleteAllByIdInBatch(Iterable<Long> longs);

    @Override
    void deleteAllInBatch();

    @Override
    Role getOne(Long aLong);

    @Override
    Role getById(Long aLong);

    @Override
    Role getReferenceById(Long aLong);

    @Override
    <S extends Role> List<S> findAll(Example<S> example);

    @Override
    <S extends Role> List<S> findAll(Example<S> example, Sort sort);
}
