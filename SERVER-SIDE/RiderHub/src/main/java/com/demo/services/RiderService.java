package com.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entities.Ride;
import com.demo.entities.Rider;
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
	
	public Rider getRiderbyEmail(String email) {
		Optional<Rider> optional = riderRepository.findRiderByEmail(email);
		Rider rider = optional.orElse(null);
		return rider;
	}

	public int getRiderLogin(String received_email,String received_password) {
//		Optional<Rider> optional = riderRepository.findRiderByEmail(received_email);
//		Rider rider = optional.orElse(null);
		Rider rider = getRiderbyEmail(received_email);
		int message;
		if(received_email==null||received_password==null) {
			message=5;
		}
		
		if(rider==null) {
			
			 message=1;
			System.out.println("You do not have an account");
		}
		else {
			
			if(rider.getPassword().equals(received_password)) {
				
				if(received_email.equals("admin@mail.in")) {
					message=4;
					System.out.println("Admin Login Sucessful ");
				}else {
				message=2;
				System.out.println("Login Successful");}
			}
			else {
				System.out.println("Wrong Password");
				 message=3;
			}
		}
		//System.out.println(rider);
		return message;
		
	}

	public void enrollRide(int id, String email) {
		Rider rider = getRiderbyEmail(email);
		Ride ride = rideService.getRidebyId(id);
		System.out.println("Rider:" + rider);
		System.out.println("Ride:" + ride);
		rider.getRides().add(ride);
		riderRepository.save(rider);
	}

	public List<Ride> getRidesByEmail(String email) {
		Rider rider = getRiderbyEmail(email);
		Set<Ride> receivedRides = rider.getRides();
		System.out.println("Rides set = " + receivedRides);

		// Typecasting
		// create an empty list
		List<Ride> receivedRidesList = new ArrayList<Ride>();

		// push each element in the set into the list
		for (Ride ride : receivedRides)
			receivedRidesList.add(ride);

		System.out.println("Rides list = " + receivedRidesList);
		return receivedRidesList;
	}
}