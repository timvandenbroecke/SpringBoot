package com.tim.webshop.repository;

import com.tim.webshop.models.Item;
import com.tim.webshop.models.enums.ItemTypeEmum;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query(value = "SELECT * FROM Item i WHERE i.type = :type", nativeQuery = true)
    List<Item> getItemByTypePagination(@Param("type") String type, Pageable pageable);

    @Query(value = "SELECT COUNT(*) FROM Item i WHERE i.type = :type", nativeQuery = true)
    Integer getTotalByType(@Param("type") String type);

    @Override
    void flush();

    @Override
    <S extends Item> S saveAndFlush(S entity);

    @Override
    <S extends Item> List<S> saveAllAndFlush(Iterable<S> entities);

    @Override
    void deleteAllInBatch(Iterable<Item> entities);

    @Override
    void deleteAllByIdInBatch(Iterable<Long> longs);

    @Override
    void deleteAllInBatch();

    @Override
    Item getOne(Long aLong);

    @Override
    Item getById(Long aLong);

    @Override
    Item getReferenceById(Long aLong);

    @Override
    <S extends Item> List<S> findAll(Example<S> example);

    @Override
    <S extends Item> List<S> findAll(Example<S> example, Sort sort);
}
