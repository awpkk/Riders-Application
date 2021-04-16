package com.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entities.Ride;

import com.demo.repositories.RideRepository;

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

}
