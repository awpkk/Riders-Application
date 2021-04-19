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

	public Rider getRiderByEmail(String email) {
		Optional<Rider> optional = riderRepository.findRiderByEmail(email);
		Rider rider = optional.orElse(null);
		System.out.println(rider);
		return rider;
	}

	public void enrollRide(int id, String email) {
		Rider rider = getRiderByEmail(email);
		Ride ride = rideService.getRidebyId(id);
		System.out.println("Rider:" + rider);
		System.out.println("Ride:" + ride);
		rider.getRides().add(ride);
		riderRepository.save(rider);
	}

	public List<Ride> getRidesByEmail(String email) {
		Rider rider = getRiderByEmail(email);
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