package com.georgemays.exotic_car_inventory.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String vin;

    private String make;
    private String model;
    private int year;
    private String color;
    private int mileage;
    private double price;
    private String transmission;
    private String engine;
    private String status;
}