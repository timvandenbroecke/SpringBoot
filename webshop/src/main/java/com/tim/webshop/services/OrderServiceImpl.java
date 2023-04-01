package com.tim.webshop.services;

import com.tim.webshop.jwt.TokenProvider;
import com.tim.webshop.models.Orders;
import com.tim.webshop.models.dto.OrderMessageDto;
import com.tim.webshop.models.dto.OrdersDto;
import com.tim.webshop.repository.OrderRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


import java.util.HashSet;
import java.util.Set;

@Service(value = "orderService")
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    private final  ItemService itemService;

    private final UserService userService;


    public OrderServiceImpl(OrderRepository orderRepository, ItemService itemService, UserService userService) {
        this.orderRepository = orderRepository;
        this.itemService = itemService;
        this.userService = userService;
    }

    // put order
    @Transactional(propagation = Propagation.REQUIRES_NEW, isolation = Isolation.SERIALIZABLE)
    public Set<OrderMessageDto> putOrder(Set<OrdersDto> ordersDtoSet, Long user_id){


        Set<OrderMessageDto> orderMessageDtos = new HashSet<>();

        ordersDtoSet.forEach(order -> {
            Integer item_quantity = itemService.getQuantityByItemId(order.getItem_id());

            for(Integer i = 0; i < order.getItem_quantity(); i++){

                item_quantity--;

                if(item_quantity >= 0){

                    itemService.updateItemQuantity(order.getItem_id(), item_quantity);
                    final Orders orders = new Orders();
                    orderRepository.saveOrder(user_id, order.getItem_id());
                    orderMessageDtos.add(new OrderMessageDto(true, order.getItem_id()));
                }else {
                    orderMessageDtos.add(new OrderMessageDto(false, order.getItem_id()));
                }
            }
        });
        return orderMessageDtos;
    }

    //  Get all orders by user id
    @Transactional(readOnly = true)
    public Set<Orders> getAllOrdersByUserId(Long user_id){

        return orderRepository.getAllOrdersByUserId(user_id);
    }
}
