package com.tim.webshop.repository;

import com.tim.webshop.models.Orders;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Long> {

    @Query(value = "INSERT INTO Order (:user_id, :item_id)", nativeQuery = true)
    void saveOrder(@Param("user_id") Long user_id, @Param("item_id") Long item_id);

    @Query(value = "SELECT * FROM Orders o WHERE o.user_id", nativeQuery = true)
    Set<Orders> getAllOrdersByUserId(@Param("user_id") Long user_id);

    @Override
    void flush();

    @Override
    <S extends Orders> S saveAndFlush(S entity);

    @Override
    <S extends Orders> List<S> saveAllAndFlush(Iterable<S> entities);

    @Override
    void deleteAllInBatch(Iterable<Orders> entities);

    @Override
    void deleteAllByIdInBatch(Iterable<Long> longs);

    @Override
    void deleteAllInBatch();

    @Override
    Orders getOne(Long aLong);

    @Override
    Orders getById(Long aLong);

    @Override
    Orders getReferenceById(Long aLong);

    @Override
    <S extends Orders> List<S> findAll(Example<S> example);

    @Override
    <S extends Orders> List<S> findAll(Example<S> example, Sort sort);
}
