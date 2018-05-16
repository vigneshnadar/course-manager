package com.example.webdevsummer12018.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer12018.models.User;
import com.example.webdevsummer12018.repositories.UserRepository;

@RestController
public class UserService {
	
	@Autowired
	UserRepository repository;	
	
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		repository.deleteById(id);
	}
	
	
	
	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
		Optional<User> data = repository.findById(userId);
		if(data.isPresent()) {
			User user = data.get();
			if(newUser.getUsername() !=null) user.setUsername(newUser.getUsername());
			
			if(newUser.getFirstName() !=null) user.setFirstName(newUser.getFirstName());
			
			if(newUser.getLastName() !=null) user.setLastName(newUser.getLastName());
			
			if(newUser.getRole() !=null) user.setRole(newUser.getRole());
			
			if(newUser.getEmail() !=null) user.setEmail(newUser.getEmail());
			
			if(newUser.getPhone() !=null) user.setPhone(newUser.getPhone());
			
			if(newUser.getDateOfBirth() != null) user.setDateOfBirth(newUser.getDateOfBirth());
			
//			System.out.println(newUser.getFirstName());
			repository.save(user);
			return user;
		}
		return null;
	}
	
	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int id) {
		Optional<User> data = repository.findById(id);
		if(data.isPresent()) {
			return data.get();
		}
		return null;
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) repository.findAll();
	}
	
	
	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user);
	}
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user) {
		User u = (User) repository.findUserByUsername(user.getUsername());
		if(u==null) return repository.save(user);
		
		return null;
		
	}
	
	
	@PostMapping("/api/login")
	public User  login(@RequestBody User user) {
		return (User) repository.findUserByCredentials(user.getUsername(), user.getPassword());
	}

}
