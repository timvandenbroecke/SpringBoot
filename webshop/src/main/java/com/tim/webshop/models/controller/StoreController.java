package com.tim.webshop.models.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tim.webshop.exception.DefaultExceptionMessage;
import com.tim.webshop.models.Item;
import com.tim.webshop.models.dto.ItemPaginationDto;
import com.tim.webshop.models.dto.OrdersDto;
import com.tim.webshop.models.dto.PaginationDto;
import com.tim.webshop.repository.ItemRepository;
import com.tim.webshop.services.ItemService;
import com.tim.webshop.services.OrderService;
import jakarta.transaction.TransactionalException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/store")
public class StoreController {

    private final OrderService orderService;

    private final ItemService itemService;

    public StoreController(OrderService orderService, ItemService itemService) {
        this.orderService = orderService;
        this.itemService = itemService;
    }

    @RequestMapping(value = "/order", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> orderTransaction(@RequestBody Set<OrdersDto> ordersDto){

        try {
            orderService.putOrder(ordersDto);

        }catch (TransactionalException e){
            System.out.println("TRANSACTIONAL ERROR");
            return new ResponseEntity<>(new DefaultExceptionMessage("TRANSACTIONAL_EXCEPTION"), HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok(ordersDto);
    }



    @RequestMapping(value = "/get_items", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getItemsPagination(@RequestBody ItemPaginationDto itemPaginationDto){

        try {

            PaginationDto items = itemService.getItemPagination(itemPaginationDto);
            return  ResponseEntity.ok(items);
        }catch (TransactionalException e){
            System.out.println("TRANSACTIONAL ERROR");
            return new ResponseEntity<>(new DefaultExceptionMessage("TRANSACTIONAL_EXCEPTION"), HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(new DefaultExceptionMessage("BAD_REQUEST"), HttpStatus.BAD_REQUEST);

        }
    }

    // Get items by type
    @RequestMapping(value = "/get_items_total/{type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getItemsTotal(@PathVariable("type") String type){

        try {
            Integer total = itemService.getItemsTotal(type);

            return  ResponseEntity.ok(total);
        }catch (TransactionalException e){
            System.out.println("TRANSACTIONAL ERROR");
            return new ResponseEntity<>(new DefaultExceptionMessage("TRANSACTIONAL_EXCEPTION"), HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            System.out.println(e);
            return new ResponseEntity<>(new DefaultExceptionMessage("BAD_REQUEST"), HttpStatus.BAD_REQUEST);

        }
    }
}
