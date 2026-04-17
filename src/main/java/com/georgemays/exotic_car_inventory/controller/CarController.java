package com.georgemays.exotic_car_inventory.controller;

import com.georgemays.exotic_car_inventory.model.Car;
import com.georgemays.exotic_car_inventory.repository.CarRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:5173")
public class CarController {

    private final CarRepository repository;

    public CarController(CarRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Car> getAllCars() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Car addCar(@RequestBody Car car) {
        return repository.save(car);
    }

    @PostMapping("/upload")
    public ResponseEntity<Car> addCarWithImage(
            @RequestParam("make") String make,
            @RequestParam("model") String model,
            @RequestParam("year") int year,
            @RequestParam("price") double price,
            @RequestParam("status") String status,
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        String uploadDir = "uploads";
        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String originalFilename = file.getOriginalFilename();
        String extension = "";

        if (originalFilename != null && originalFilename.contains(".")) {
            extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        }

        String fileName = UUID.randomUUID() + extension;
        Path filePath = uploadPath.resolve(fileName);

        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        Car car = new Car();
        car.setMake(make);
        car.setModel(model);
        car.setYear(year);
        car.setPrice(price);
        car.setStatus(status);
        car.setImage("/uploads/" + fileName);

        Car savedCar = repository.save(car);
        return ResponseEntity.ok(savedCar);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car updatedCar) {
        return repository.findById(id)
                .map(car -> {
                    car.setMake(updatedCar.getMake());
                    car.setModel(updatedCar.getModel());
                    car.setYear(updatedCar.getYear());
                    car.setPrice(updatedCar.getPrice());
                    car.setImage(updatedCar.getImage());
                    car.setStatus(updatedCar.getStatus());
                    return ResponseEntity.ok(repository.save(car));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}