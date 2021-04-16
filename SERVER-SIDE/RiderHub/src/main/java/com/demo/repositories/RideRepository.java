package com.demo.repositories;


import org.springframework.data.repository.CrudRepository;

import com.demo.entities.Ride;


public interface RideRepository extends CrudRepository<Ride,Integer>{

}
