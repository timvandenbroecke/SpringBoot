package com.tim.webshop.services;

import com.tim.webshop.models.Item;
import com.tim.webshop.models.dto.ItemPaginationDto;
import com.tim.webshop.models.dto.OrdersDto;
import com.tim.webshop.models.dto.PaginationDto;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Set;

public interface ItemService {


    PaginationDto getItemPagination(ItemPaginationDto itemPaginationDto);

    Integer getItemsTotal(String type);
}
