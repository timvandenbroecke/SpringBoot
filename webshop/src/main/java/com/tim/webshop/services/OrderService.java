package com.tim.webshop.services;

import com.tim.webshop.models.Orders;
import com.tim.webshop.models.dto.OrderMessageDto;
import com.tim.webshop.models.dto.OrdersDto;

import java.util.Set;

public interface OrderService {

    Set<OrderMessageDto> putOrder(Set<OrdersDto> ordersDtoSet, Long user_id);

    Set<Orders> getAllOrdersByUserId(Long user_id);

}
