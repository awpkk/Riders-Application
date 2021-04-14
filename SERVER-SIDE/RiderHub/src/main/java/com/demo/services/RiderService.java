package com.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entities.Rider;
import com.demo.repositories.RiderRepository;

@Service
public class RiderService {
	
	@Autowired
	RiderRepository riderRepository;

	public List<Rider> getAllRiders() {
		return (List<Rider>) riderRepository.findAll();
	}

	public Rider addRider(Rider rider) {
		return riderRepository.save(rider);
	}
	


}
