package com.tim.webshop.repository;

import com.tim.webshop.models.Sales;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalesRepository extends JpaRepository<Sales, Long> {

    @Override
    void flush();

    @Override
    <S extends Sales> S saveAndFlush(S entity);

    @Override
    <S extends Sales> List<S> saveAllAndFlush(Iterable<S> entities);

    @Override
    void deleteAllInBatch(Iterable<Sales> entities);

    @Override
    void deleteAllByIdInBatch(Iterable<Long> longs);

    @Override
    void deleteAllInBatch();

    @Override
    Sales getOne(Long aLong);

    @Override
    Sales getById(Long aLong);

    @Override
    Sales getReferenceById(Long aLong);

    @Override
    <S extends Sales> List<S> findAll(Example<S> example);

    @Override
    <S extends Sales> List<S> findAll(Example<S> example, Sort sort);
}
