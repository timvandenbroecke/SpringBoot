package com.tim.webshop.repository;

import com.tim.webshop.models.Countries;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;
@Repository
public interface CountriesRepository extends JpaRepository<Countries, Long> {

    @Query(value = "SELECT c.name FROM Countries c", nativeQuery = true)
    Set<Countries> getAllCountriesNames();

    @Query(value = "SELECT * FROM Countries", nativeQuery = true)
    Set<Countries> getAllCountries();


    @Override
    void flush();

    @Override
    <S extends Countries> S saveAndFlush(S entity);

    @Override
    <S extends Countries> List<S> saveAllAndFlush(Iterable<S> entities);

    @Override
    default void deleteInBatch(Iterable<Countries> entities) {
        JpaRepository.super.deleteInBatch(entities);
    }

    @Override
    void deleteAllInBatch(Iterable<Countries> entities);

    @Override
    void deleteAllByIdInBatch(Iterable<Long> longs);

    @Override
    void deleteAllInBatch();

    @Override
    Countries getOne(Long aLong);

    @Override
    Countries getById(Long aLong);

    @Override
    Countries getReferenceById(Long aLong);

    @Override
    <S extends Countries> List<S> findAll(Example<S> example);

    @Override
    <S extends Countries> List<S> findAll(Example<S> example, Sort sort);
}
