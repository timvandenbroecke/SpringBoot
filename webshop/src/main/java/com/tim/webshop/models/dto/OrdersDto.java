package com.tim.webshop.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrdersDto {


    @JsonProperty(value = "item_id")
    private Long item_id;

    @JsonProperty(value = "item_quantity")
    private Integer item_quantity;


    public Long getItem_id() {
        return item_id;
    }

    public void setItem_id(Long item_id) {
        this.item_id = item_id;
    }

    public Integer getItem_quantity() {
        return item_quantity;
    }

    public void setItem_quantity(Integer item_quantity) {
        this.item_quantity = item_quantity;
    }
}
