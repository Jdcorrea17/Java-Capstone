package com.capstone.project.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Homes")
public class Homes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String address;
    private int rooms;
    private int bathrooms;
    private String squareFt;
    private double price;
    private boolean availability;

    Homes(String address, int rooms, int bathrooms, String squareFt, double price, boolean availability){
        this.address = address;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareFt = squareFt;
        this.price = price;
        this.availability = availability;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getRooms() {
        return rooms;
    }

    public void setRooms(int rooms) {
        this.rooms = rooms;
    }

    public int getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(int bathrooms) {
        this.bathrooms = bathrooms;
    }

    public String getSquareFt() {
        return squareFt;
    }

    public void setSquareFt(String squareFt) {
        this.squareFt = squareFt;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }
}
