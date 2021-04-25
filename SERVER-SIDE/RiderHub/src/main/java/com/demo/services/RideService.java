package com.demo.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.entities.Ride;
import com.demo.entities.Rider;
import com.demo.repositories.RideRepository;
import com.demo.repositories.RiderRepository;

@Service
public class RideService {
	
	@Autowired
	RideRepository rideRepository;
	
	@Autowired
	RiderRepository riderRepository;
	
	@Autowired
	RiderService riderService;
	
	public List<Ride> getAllRides() {
		return (List<Ride>) rideRepository.findAll();
	}

	public Ride addRide(Ride ride) {
		return rideRepository.save(ride);
	}
	
	public Ride getRidebyId(int id) {
		return rideRepository.findById(id).orElse(null);
	}
	public boolean removeRider(String email, int id) {
		Ride ride = getRidebyId(id);
		Rider rider = riderService.getRiderbyEmail(email);
		rider.getRides().remove(ride);
		riderRepository.save(rider);
		return true;
	}
}