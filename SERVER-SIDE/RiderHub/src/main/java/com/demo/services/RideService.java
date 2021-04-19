package com.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entities.Ride;
import com.demo.repositories.RideRepository;
import com.sun.el.stream.Optional;

@Service
public class RideService {
	

	@Autowired
	RideRepository rideRepository;
	
	public List<Ride> getAllRides() {
		return (List<Ride>) rideRepository.findAll();
	}

	public Ride addRide(Ride ride) {
		return rideRepository.save(ride);
	}
	
	public Ride getRidebyId(int id) {
		return rideRepository.findById(id).orElse(null);
	}

}
