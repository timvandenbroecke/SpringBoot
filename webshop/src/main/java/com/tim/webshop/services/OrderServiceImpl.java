package com.tim.webshop.services;

import com.tim.webshop.models.Item;
import com.tim.webshop.models.Orders;
import com.tim.webshop.models.dto.OrdersDto;
import com.tim.webshop.repository.OrderRepository;
import org.springframework.stereotype.Service;


import java.util.Set;

@Service(value = "orderService")
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // put order
    public void putOrder(Set<OrdersDto> ordersDtoSet){

        //@Lock(LockModeType.PESSIMISTIC_WRITE)
        ordersDtoSet.forEach(order -> {
            orderRepository.saveOrder(order.getUser_id(), order.getItem_id());
        });

    }

    //  Get all orders by user id
    public Set<Orders> getAllOrdersByUserId(Long user_id){

        return orderRepository.getAllOrdersByUserId(user_id);
    }
}
