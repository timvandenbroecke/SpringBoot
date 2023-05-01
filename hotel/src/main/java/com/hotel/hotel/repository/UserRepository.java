package com.hotel.hotel.repository;

import com.hotel.hotel.model.User;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    @Override
    void flush();

    @Override
    <S extends User> S saveAndFlush(S entity);

    @Override
    <S extends User> List<S> saveAllAndFlush(Iterable<S> entities);

    @Override
    default void deleteInBatch(Iterable<User> entities) {
        JpaRepository.super.deleteInBatch(entities);
    }

    @Override
    void deleteAllInBatch(Iterable<User> entities);

    @Override
    void deleteAllByIdInBatch(Iterable<Long> longs);

    @Override
    void deleteAllInBatch();

    @Override
    User getOne(Long aLong);

    @Override
    User getById(Long aLong);

    @Override
    User getReferenceById(Long aLong);

    @Override
    <S extends User> List<S> findAll(Example<S> example);

    @Override
    <S extends User> List<S> findAll(Example<S> example, Sort sort);
}
