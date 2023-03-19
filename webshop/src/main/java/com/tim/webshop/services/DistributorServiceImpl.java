package com.tim.webshop.services;


import com.tim.webshop.models.Distributor;
import com.tim.webshop.repository.DistributorRepository;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("distributorService")
public class DistributorServiceImpl implements DistributorService{

    private final DistributorRepository distributorRepository;

    public DistributorServiceImpl(DistributorRepository distributorRepository) {
        this.distributorRepository = distributorRepository;
    }

    @Override
    public void flush() {
        this.distributorRepository.flush();
    }

    @Override
    public <S extends Distributor> S saveAndFlush(S entity) {
        return this.distributorRepository.saveAndFlush(entity);
    }

    @Override
    public <S extends Distributor> List<S> saveAllAndFlush(Iterable<S> entities) {
        return this.distributorRepository.saveAllAndFlush(entities);
    }

    @Override
    public void deleteAllInBatch(Iterable<Distributor> entities) {
        this.distributorRepository.deleteAllInBatch();
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> longs) {
        this.distributorRepository.deleteAllByIdInBatch(longs);
    }

    @Override
    public void deleteAllInBatch() {
        this.distributorRepository.deleteAllInBatch();
    }

    @Override
    public Distributor getOne(Long aLong) {
        return this.distributorRepository.getOne(aLong);
    }

    @Override
    public Distributor getById(Long aLong) {
        return this.distributorRepository.getById(aLong);
    }

    @Override
    public Distributor getReferenceById(Long aLong) {
        return this.distributorRepository.getReferenceById(aLong);
    }

    @Override
    public <S extends Distributor> List<S> findAll(Example<S> example) {
        return this.distributorRepository.findAll(example);
    }

    @Override
    public <S extends Distributor> List<S> findAll(Example<S> example, Sort sort) {
        return this.distributorRepository.findAll(example, sort);
    }
}
