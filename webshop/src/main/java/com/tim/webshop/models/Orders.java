package com.tim.webshop.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Orders")
public class Orders {

    public Orders() {
    }

    @EmbeddedId
    OrderIdKey id;

    @ManyToOne
    @MapsId("orders")
    @JoinColumn(name = "user_id")
    Users users;

    @ManyToOne
    @MapsId("orders")
    @JoinColumn(name = "item_id")
    Item item;

    public OrderIdKey getId() {
        return id;
    }

    public void setId(OrderIdKey id) {
        this.id = id;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }
}
