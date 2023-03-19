package com.tim.webshop.services;

import com.tim.webshop.repository.SalesRepository;
import org.springframework.stereotype.Service;

@Service("salesService")
public class SalesServiceImpl implements SalesService {

    private SalesRepository salesRepository;

    public SalesServiceImpl(SalesRepository salesRepository) {
        this.salesRepository = salesRepository;
    }


}
