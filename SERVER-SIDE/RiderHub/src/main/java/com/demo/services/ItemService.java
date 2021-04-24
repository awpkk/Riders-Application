package com.demo.services;

import java.util.List;
import java.util.Optional;

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

	public Item findItemById(int id) {

		Optional<Item> optional = itemRepository.findById(id);
		Item item = optional.orElse(null);

		System.out.println(item);

		return item;
	}
	public boolean editItem(int id, Item item) {
        item.setId(id);
        itemRepository.save(item);
        return true;
    }
}
