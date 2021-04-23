package com.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entities.Item;
import com.demo.entities.Ride;
import com.demo.services.ItemService;
import com.demo.services.RideService;

@RestController
@RequestMapping("items")
@CrossOrigin(origins = {"https://hoppscotch.io","http://localhost:4200"})
public class ItemController {
	
	@Autowired
	ItemService itemService;
	
	@GetMapping("/all")
//	http://localhost:8787/items/all
	public List<Item> getAllItems() {
		System.out.println("in get mapping");
		return itemService.getAllItems();
	}
	
	@PostMapping("/create")
//	http://localhost:8787/items/create
	public Item addItem(@RequestBody Item item) {
		return itemService.addItem(item);
	}
}