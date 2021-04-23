package com.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entities.Item;
import com.demo.entities.Ride;
import com.demo.repositories.ItemRepository;
import com.demo.repositories.RideRepository;

@Service
public class ItemService {

	@Autowired
	ItemRepository itemRepository;
	
	public List<Item> getAllItems() {
		return (List<Item>) itemRepository.findAll();
	}
	
	public Item addItem(Item item) {
		return itemRepository.save(item);
	}

	public void deleteItem(int id) {
        // itemRepository.delete(findItemById(id));
       itemRepository.deleteById(id);
    }
}
