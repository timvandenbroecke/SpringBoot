package com.tim.webshop.services;

import com.tim.webshop.models.Orders;
import com.tim.webshop.models.dto.OrdersDto;

import java.util.Set;

public interface OrderService {

    void putOrder(Set<OrdersDto> ordersDtoSet);

    Set<Orders> getAllOrdersByUserId(Long user_id);

}
