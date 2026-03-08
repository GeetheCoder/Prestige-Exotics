package com.georgemays.exotic_car_inventory.controller;

import com.georgemays.exotic_car_inventory.model.Car;
import com.georgemays.exotic_car_inventory.repository.CarRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")

public class CarController {

    private final CarRepository repository;

    public CarController(CarRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Car> getAllCars() {
        return repository.findAll();
    }

    @PostMapping
    public Car addCar(@RequestBody Car car) {
        return repository.save(car);
    }
}