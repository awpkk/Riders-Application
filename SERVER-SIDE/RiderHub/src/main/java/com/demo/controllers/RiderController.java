package com.demo.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entities.Rider;

import com.demo.services.RiderService;

@RestController
@RequestMapping("riders")
@CrossOrigin(origins = {"https://hoppscotch.io","http://localhost:4200"})
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
	@GetMapping("login/{email}")
	public Rider getRider(@PathVariable String email) {
		return riderService.getRiderByEmail(email);
	}
}