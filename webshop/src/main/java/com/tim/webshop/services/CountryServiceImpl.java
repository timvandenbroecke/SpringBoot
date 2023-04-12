package com.tim.webshop.services;

import com.tim.webshop.models.Countries;
import com.tim.webshop.repository.CountriesRepository;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service("countryService")
public class CountryServiceImpl implements CountryService {

    private final CountriesRepository countriesRepository;

    public CountryServiceImpl(CountriesRepository countriesRepository) {
        this.countriesRepository = countriesRepository;
    }

    @Override
    public Set<Countries> getAllCountriesNames() {
        return countriesRepository.getAllCountriesNames();
    }

    @Override
    public Set<Countries> getAllCountries() {
        return countriesRepository.getAllCountries();
    }
}
