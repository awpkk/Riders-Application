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
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class ApplicationTests {
	
	ItemService itemService;
	ItemController itemController;
	ItemRepository itemRepository;
	
	@Before // before each testcase
	public void beforeEachTestCase1(){
		System.out.println("before each test case 1");
	}

	@Test
	void contextLoads() {
	}
	
	@SuppressWarnings("deprecation")
	@Test
	void shouldGetId() {
		Item item = new Item();
		item.setId(12);
		int itemId = item.getId();
		Assertions.assertEquals(12, itemId);
	}
	
}
