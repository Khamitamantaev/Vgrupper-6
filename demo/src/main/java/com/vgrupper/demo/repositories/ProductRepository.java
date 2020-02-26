package com.vgrupper.demo.repositories;

import com.vgrupper.demo.entity.Products;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Products, String> {

    @Override
    void delete(Products deleted);
}