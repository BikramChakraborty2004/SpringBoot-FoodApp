package com.bikram.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bikram.model.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, String> {

}
