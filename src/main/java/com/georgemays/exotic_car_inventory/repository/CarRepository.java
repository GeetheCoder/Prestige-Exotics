package com.georgemays.exotic_car_inventory.repository;

import com.georgemays.exotic_car_inventory.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
}