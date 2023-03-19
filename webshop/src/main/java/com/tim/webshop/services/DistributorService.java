package com.tim.webshop.services;

import com.tim.webshop.models.Distributor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface DistributorService {

    void flush();

    <S extends Distributor> S saveAndFlush(S entity);

    <S extends Distributor> List<S> saveAllAndFlush(Iterable<S> entities);

    void deleteAllInBatch(Iterable<Distributor> entities);

    void deleteAllByIdInBatch(Iterable<Long> longs);

    void deleteAllInBatch();

    Distributor getOne(Long aLong);

    Distributor getById(Long aLong);

    Distributor getReferenceById(Long aLong);

    <S extends Distributor> List<S> findAll(Example<S> example);

    <S extends Distributor> List<S> findAll(Example<S> example, Sort sort);
}
