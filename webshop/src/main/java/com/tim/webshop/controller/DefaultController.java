package com.tim.webshop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DefaultController {

    @RequestMapping("/watches")
    public String getWatches(){

        return "";
    }

    @RequestMapping("/jewelry")
    public String getJewelry(){

        return "";
    }

    @RequestMapping("/clothes")
    public String getClothes(){

        return "";
    }

    @RequestMapping("/kids")
    public String getKids(){

        return "";
    }

    @RequestMapping("/cart")
    public String getCart(){

        return "";
    }

    @RequestMapping("/favicon.ico")
    public String getFavicon(){

        return "";
    }


}
