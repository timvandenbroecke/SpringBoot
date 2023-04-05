package com.tim.webshop.services;

import com.tim.webshop.models.Item;
import com.tim.webshop.models.dto.ItemPaginationDto;
import com.tim.webshop.models.dto.OrdersDto;
import com.tim.webshop.models.dto.PaginationDto;
import com.tim.webshop.repository.ItemRepository;
import jakarta.persistence.LockModeType;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

@Service(value = "itemService")
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;

    public ItemServiceImpl(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    // Gets all items by type and return it paginated, also total number of items by type
    public PaginationDto getItemPagination(ItemPaginationDto itemPaginationDto){

        PaginationDto paginationDto = new PaginationDto();

        Pageable ItemPage = PageRequest.of(itemPaginationDto.getPage(), itemPaginationDto.getTotal(), Sort.by(itemPaginationDto.getSort()).descending());
        paginationDto.setItems(itemRepository.getItemByTypePagination(itemPaginationDto.getType(), ItemPage));
        paginationDto.setTotal_items(itemRepository.getTotalByType(itemPaginationDto.getType()));

        // return
        return paginationDto;
    }

    public Integer getItemsTotal(String type){
        return itemRepository.getTotalByType(type);
    }

    public Integer getQuantityByItemId(Long item_id){

        return itemRepository.getQuantityByItemId(item_id);
    }

    public void updateItemQuantity(Long item_id, Integer quantity){

       itemRepository.updateItemQuantity(item_id, quantity);
    }

    public List<Item> getAllItemsFromOrdersByUserId(Long user_id){

        return itemRepository.getAllItemsFromOrdersByUserId(user_id);
    }

}
