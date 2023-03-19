package com.tim.webshop.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemPaginationDto {


    public ItemPaginationDto(Integer page, Integer total, String sort, String type) {
        this.page = page;
        this.total = total;
        this.sort = sort;
        this.type = type;
    }

    @JsonProperty(value = "page")
    private Integer page;

    @JsonProperty(value = "total")
    private Integer total;

    @JsonProperty(value = "sort")
    private String sort;

    @JsonProperty(value = "type")
    private String type;


    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
