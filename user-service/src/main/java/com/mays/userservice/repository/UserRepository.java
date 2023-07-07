package com.mays.userservice.repository;

import java.util.List;

import com.mays.userservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {

	@Query("{'name' : ?0}")
	List<User> findByName(String name, HttpStatus ok);

	@Query("{'userEmail' : ?0}")
	User findByEmail(String userEmail, HttpStatus ok);
}
