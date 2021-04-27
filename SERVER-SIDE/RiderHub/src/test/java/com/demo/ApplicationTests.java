package com.demo;
import com.demo.controllers.ItemController;
import com.demo.entities.Item;
import com.demo.entities.Rider;
import com.demo.repositories.ItemRepository;
import com.demo.services.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.Before;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class ApplicationTests {
	
	@Autowired
	ItemService itemService;
	
	@Autowired
	ItemController itemController;
	
	@Before // before each testcase
	public void beforeEachTestCase1(){
		System.out.println("before each test case 1");
	}

	@Test
	void contextLoads() {
	}
	
	//Testing entity
	@Test
	void shouldGetId() {
		Item item = new Item();
		item.setId(12);		
		int itemId = item.getId();
		Assertions.assertEquals(12, itemId);
	}
	
	//Testing service
	@Test
	public void shouldFindItem() {
	    int id = 51; //Valid ID
	    Item found = itemService.findItemById(id);
	    Assertions.assertEquals(found.getId(), id);
	 }
	
	//Testing service
	@Test
	public void shouldNotFindItem() {
	    int id = 10000; //Invalid ID
	    Item found = itemService.findItemById(id);
	    Assertions.assertNull(found);
	 }
	
	//Testing controller
	@Test
	public void shouldFindItemByID() {
		int id = 51; //Valid ID
		Item found = itemController.findItemById(id);
		Assertions.assertEquals(found.getId(), id);
	}
	
	//Testing controller
	@Test
	public void shouldNotFindItemByID() {
		int id = 10000; //Invalid ID
		Item found = itemController.findItemById(id);
		Assertions.assertNull(found);
	}
}
