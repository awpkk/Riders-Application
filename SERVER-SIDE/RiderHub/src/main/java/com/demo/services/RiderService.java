package com.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entities.Ride;
import com.demo.entities.Rider;
import com.demo.repositories.RideRepository;
import com.demo.repositories.RiderRepository;

@Service
public class RiderService {
	
	@Autowired
	RiderRepository riderRepository;
	
	@Autowired
	RideService rideService;
	
	
	
	

	public List<Rider> getAllRiders() {
		return (List<Rider>) riderRepository.findAll();
	}

	public Rider addRider(Rider rider) {
		return riderRepository.save(rider);
	}
	
	public Rider getRiderByEmail(String email) {
		Optional<Rider> optional = riderRepository.findRiderByEmail(email);
		Rider rider = optional.orElse(null);
		System.out.println(rider);
		return rider;
	}
	public void enrollRide(int id, String email) {
		Rider rider = getRiderByEmail(email);
		Ride ride= rideService.getRidebyId(id);
		System.out.println("Rider:"+rider);
		System.out.println("Ride:"+ride);
		
		
		rider.getRides().add(ride);
		

	    riderRepository.save(rider);
		
		
		
		
		
		
//		rider.addEnrolledRides(ride);
//		System.out.println("Rider after adding ride:"+rider);
//		List<Ride> list= rider.getEnrolledRides();
//		rider.setEnrolledRides(list); 
//		
//	
//		riderRepository.save(rider);
		//rider.addEnrolledRides(ride);
		//System.out.println("Rider after adding ride:"+rider);
		//riderRepository.update(rider);
		//rider.addEnrolledRides(ride);
		//riderRepository.save(rider);
		
	}
}