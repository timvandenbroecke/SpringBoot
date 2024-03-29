package com.tim.webshop.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.tim.webshop.models.enums.PrivilegeEnum;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Privilege {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Enumerated(value = EnumType.STRING)
    private PrivilegeEnum type;
/*
    @ManyToMany(mappedBy = "privileges")
    @JsonIgnoreProperties("privileges") // Ignore the fields in Role entity.
    private List<Role> roles = new ArrayList<>();
*/
    public Privilege() {
    }

    public Privilege(PrivilegeEnum type) {
        this.type = type;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PrivilegeEnum getType() {
        return type;
    }

    public void setType(PrivilegeEnum type) {
        this.type = type;
    }


}