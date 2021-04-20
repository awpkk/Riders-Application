package com.demo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.demo.entities.Item;

public interface ItemRepository extends CrudRepository<Item,Integer>{

}
		