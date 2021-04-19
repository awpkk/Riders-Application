package com.demo.repositories;

import java.util.Optional;

//import org.springframework.data.jpa.repository.JpaRepository; JpaRepository<Rider,Integer>
import org.springframework.data.repository.CrudRepository;

import com.demo.entities.Rider;

public interface RiderRepository extends CrudRepository<Rider,Integer> {
	Optional<Rider> findRiderByEmail(String email);
	//void update(Rider rider);

}
