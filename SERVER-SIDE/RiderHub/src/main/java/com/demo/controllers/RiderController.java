package com.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entities.Item;
import com.demo.entities.Ride;
import com.demo.entities.Rider;

import com.demo.services.RiderService;

@RestController
@RequestMapping("riders")
@CrossOrigin(origins = { "https://hoppscotch.io", "http://localhost:4200" })
public class RiderController {

	@Autowired
	RiderService riderService;

	@GetMapping("/all")
//	http://localhost/8787/riders/all
	public List<Rider> getAllRiders() {
		System.out.println("in get mapping");
		return riderService.getAllRiders();
	}

	@PostMapping("/register")
//	http://localhost/8787/riders/register
	public Rider addRider(@RequestBody Rider rider) {
		return riderService.addRider(rider);
	}

	@PostMapping("/validate/{email}")
	public int getRiderLogin(@PathVariable String email,@RequestBody String password) {
		System.out.println(riderService.getRiderLogin(email,password)+" in controller");
		return riderService.getRiderLogin(email,password);
		
	}

	
	
	@GetMapping("/home/{email}")
	public Rider getRider(@PathVariable String email) {
		return riderService.getRiderbyEmail(email);
	}

	// http://localhost/8787/riders/enroll/sk@gmail.com
	@PostMapping("/enroll/{email}")
	public void enrollRide(@RequestBody int id, @PathVariable String email) {
		riderService.enrollRide(id, email);
	}

	// ${this.host}/riders/getEnrolledRides/${email}
	@GetMapping("/getEnrolledRides/{email}")
	public List<Ride> getEnrolledRides(@PathVariable String email) {
		return riderService.getRidesByEmail(email);
	}
	@GetMapping("/getPurchasedItems/{email}")
	public List<Item> getPurchasedItems(@PathVariable String email) {
		return riderService.getItemsByEmail(email);
	}
}