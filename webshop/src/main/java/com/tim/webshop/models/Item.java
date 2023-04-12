package com.tim.webshop.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.tim.webshop.models.enums.ItemTypeEmum;
import jakarta.persistence.*;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "Item")
@EntityListeners(AuditingEntityListener.class)
public class Item {

    public Item() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name" , nullable = false, length = 255)
    private String name;

    @Column(name = "price", nullable = false, length = 255)
    private Double price;

    @Column(name = "quantity", nullable = false,  length = 255)
    private Integer quantity;

    @Column(name = "image", nullable = false,  length = 255)
    private String image;

    @Column(name = "description", nullable = false,  length = 255)
    private String description;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private ItemTypeEmum itemTypeEmum;

    @JsonManagedReference("item-order")
    @OneToMany(mappedBy = "item")
    Set<Orders> orders;

    @Column(name = "created_date", nullable = false, updatable = false)
    @CreatedDate
    private Date createdDate;

    @Column(name = "modified_date")
    @LastModifiedDate
    private Date modifiedDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Orders> getOrders() {
        return orders;
    }

    public ItemTypeEmum getItemTypeEmum() {
        return itemTypeEmum;
    }

    public void setItemTypeEmum(ItemTypeEmum itemTypeEmum) {
        this.itemTypeEmum = itemTypeEmum;
    }

    public void setOrders(Set<Orders> orders) {
        this.orders = orders;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Item item = (Item) o;

        if (!id.equals(item.id)) return false;
        if (!name.equals(item.name)) return false;
        if (!price.equals(item.price)) return false;
        if (!quantity.equals(item.quantity)) return false;
        if (!image.equals(item.image)) return false;
        if (!description.equals(item.description)) return false;
        if (itemTypeEmum != item.itemTypeEmum) return false;
        return Objects.equals(orders, item.orders);
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + name.hashCode();
        result = 31 * result + price.hashCode();
        result = 31 * result + quantity.hashCode();
        result = 31 * result + image.hashCode();
        result = 31 * result + description.hashCode();
        result = 31 * result + itemTypeEmum.hashCode();
        result = 31 * result + (orders != null ? orders.hashCode() : 0);
        return result;
    }
}
