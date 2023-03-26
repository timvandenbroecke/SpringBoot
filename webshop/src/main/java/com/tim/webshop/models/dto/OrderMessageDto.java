package com.tim.webshop.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderMessageDto {

    public OrderMessageDto(boolean ordered, Long item_id) {
        this.ordered = ordered;
        this.item_id = item_id;
    }

    @JsonProperty("ordered")
    private boolean ordered;

    @JsonProperty("item_id")
    private Long item_id;

    public boolean isOrdered() {
        return ordered;
    }

    public void setOrdered(boolean ordered) {
        this.ordered = ordered;
    }

    public Long getItem_id() {
        return item_id;
    }

    public void setItem_id(Long item_id) {
        this.item_id = item_id;
    }
}
