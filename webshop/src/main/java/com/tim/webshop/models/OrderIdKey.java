package com.tim.webshop.models;

import jakarta.persistence.Column;

import java.io.Serializable;

public class OrderIdKey implements Serializable {

    public OrderIdKey(){

    }

    @Column(name = "user_id", nullable = false)
    Long userId;

    @Column(name = "item_id", nullable = false)
    Long itemId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrderIdKey that = (OrderIdKey) o;

        if (!userId.equals(that.userId)) return false;
        return itemId.equals(that.itemId);
    }

    @Override
    public int hashCode() {
        int result = userId.hashCode();
        result = 31 * result + itemId.hashCode();
        return result;
    }
}
