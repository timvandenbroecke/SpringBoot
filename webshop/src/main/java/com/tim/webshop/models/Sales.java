package com.tim.webshop.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Sales")
public class Sales {

    public Sales(){

    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "total",  nullable = false)
    private Double total;

    @ManyToOne(targetEntity = Users.class)
    @JoinColumn(name = "user_id")
    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
