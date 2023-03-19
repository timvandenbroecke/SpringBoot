package com.tim.webshop.repository;

import com.tim.webshop.models.Users;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {

    Users findByUsername(String username);

    boolean existsByUsername(String email);

    @Query(value = "SELECT * FROM USERS u WHERE u.EMAIL = :email",  nativeQuery = true)
    Users findByEmail(@Param("email") String email);

    @Override
    void flush();

    @Override
    <S extends Users> S saveAndFlush(S entity);

    @Override
    <S extends Users> List<S> saveAllAndFlush(Iterable<S> entities);

    @Override
    default void deleteInBatch(Iterable<Users> entities) {
        JpaRepository.super.deleteInBatch(entities);
    }

    @Override
    void deleteAllInBatch(Iterable<Users> entities);

    @Override
    void deleteAllByIdInBatch(Iterable<Long> longs);

    @Override
    void deleteAllInBatch();

    @Override
    Users getOne(Long aLong);

    @Override
    Users getById(Long aLong);

    @Override
    Users getReferenceById(Long aLong);

    @Override
    <S extends Users> List<S> findAll(Example<S> example);

    @Override
    <S extends Users> List<S> findAll(Example<S> example, Sort sort);
}
