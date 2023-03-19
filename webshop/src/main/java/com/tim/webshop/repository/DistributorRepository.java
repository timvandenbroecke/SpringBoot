package com.tim.webshop.repository;

import com.tim.webshop.models.Distributor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistributorRepository extends JpaRepository<Distributor, Long> {

    @Override
    void flush();

    @Override
    <S extends Distributor> S saveAndFlush(S entity);

    @Override
    <S extends Distributor> List<S> saveAllAndFlush(Iterable<S> entities);

    @Override
    void deleteAllInBatch(Iterable<Distributor> entities);

    @Override
    void deleteAllByIdInBatch(Iterable<Long> longs);

    @Override
    void deleteAllInBatch();

    @Override
    Distributor getOne(Long aLong);

    @Override
    Distributor getById(Long aLong);

    @Override
    Distributor getReferenceById(Long aLong);

    @Override
    <S extends Distributor> List<S> findAll(Example<S> example);

    @Override
    <S extends Distributor> List<S> findAll(Example<S> example, Sort sort);
}
