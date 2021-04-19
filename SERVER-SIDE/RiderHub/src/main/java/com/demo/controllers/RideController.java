package com.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entities.Ride;

import com.demo.services.RideService;


@RestController
@RequestMapping("rides")
@CrossOrigin(origins = {"https://hoppscotch.io","http://localhost:4200"})
public class RideController {
	
	@Autowired
	RideService rideService;
	
	@GetMapping("/all")
//	http://localhost/8787/rides/all
	public List<Ride> getAllRides() {
		List<Ride> allRides = rideService.getAllRides();
		System.out.println("in get mapping");
		System.out.println(allRides);
		return allRides ;
	}
	@PostMapping("/create")
//	http://localhost/8787/rides/create
	public Ride addRide(@RequestBody Ride ride) {
		return rideService.addRide(ride);
	}
	
	

}
