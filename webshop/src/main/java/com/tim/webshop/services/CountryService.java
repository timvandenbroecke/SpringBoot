package com.tim.webshop.services;

import com.tim.webshop.models.Countries;

import java.util.Set;

public interface CountryService {

    Set<Countries> getAllCountriesNames();

    Set<Countries> getAllCountries();
}
