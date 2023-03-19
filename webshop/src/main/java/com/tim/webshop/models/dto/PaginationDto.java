package com.tim.webshop.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.tim.webshop.models.Item;

import java.util.List;

public class PaginationDto {

    @JsonProperty("total_items")
    private Integer total_items;

    @JsonProperty("items")
    private List<Item> items;

    public Integer getTotal_items() {
        return total_items;
    }

    public void setTotal_items(Integer total_items) {
        this.total_items = total_items;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
