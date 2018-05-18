package com.example.webdevsummer12018.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
		if (data.isPresent()) {
			User user = data.get();
			if (newUser.getUsername() != null)
				user.setUsername(newUser.getUsername());

			if (newUser.getFirstName() != null)
				user.setFirstName(newUser.getFirstName());

			if (newUser.getLastName() != null)
				user.setLastName(newUser.getLastName());

			if (newUser.getRole() != null)
				user.setRole(newUser.getRole());

			if (newUser.getEmail() != null)
				user.setEmail(newUser.getEmail());

			if (newUser.getPhone() != null)
				user.setPhone(newUser.getPhone());

			if (newUser.getDateOfBirth() != null)
				user.setDateOfBirth(newUser.getDateOfBirth());

			// System.out.println(newUser.getFirstName());
			repository.save(user);
			return user;
		}
		return null;
	}

	@PutMapping("/api/profile")
	public User updateProfile(@RequestBody User newUser, HttpSession session) {

		User s = (User) session.getAttribute("currentUser");
		String usr = s.getUsername();
		System.out.println("updateProfile");
		System.out.println(s.getUsername());
		int userId = s.getId();
		System.out.println(userId);
		Optional<User> data = repository.findById(userId);
		if (data.isPresent()) {
			User user = data.get();
			if (newUser.getUsername() != null)
				user.setUsername(newUser.getUsername());

			if (newUser.getFirstName() != null)
				user.setFirstName(newUser.getFirstName());

			if (newUser.getLastName() != null)
				user.setLastName(newUser.getLastName());

			if (newUser.getRole() != null)
				user.setRole(newUser.getRole());

			if (newUser.getEmail() != null)
				user.setEmail(newUser.getEmail());

			if (newUser.getPhone() != null)
				user.setPhone(newUser.getPhone());

			if (newUser.getDateOfBirth() != null)
				user.setDateOfBirth(newUser.getDateOfBirth());

			// System.out.println(newUser.getFirstName());
			repository.save(user);
			return user;
		}
		return null;
	}

	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int id) {
		Optional<User> data = repository.findById(id);
		if (data.isPresent()) {
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
	public User register(@RequestBody User user, HttpSession session, HttpServletResponse response) {
		session.setAttribute("currentUser", user);
		User s = (User) session.getAttribute("currentUser");
		System.out.println(s);
		System.out.println(s.getUsername());

		String currentUsername = user.getUsername();
		// password match fail
		if (currentUsername.equals("pwdmatchfail")) {
			response.setStatus(408);
			return null;
		}

		// user does not exist so create the user and return
		User u = (User) repository.findUserByUsername(user.getUsername());
		if (u == null)
			return repository.save(user);

		// user exists
		response.setStatus(409);
		return null;

	}

	@GetMapping("/api/profile")
	public User profile(HttpSession session) {
		User u=  (User) session.getAttribute("currentUser");
//		Optional<User> data = (Optional<User>) session.getAttribute("currentUser");
//		if (data.isPresent()) {
//			return data.get();
//		}
		return u;
		
	}

	@PostMapping("/api/login")
	public User login(@RequestBody User user, HttpSession session, HttpServletResponse response ) {

		
			response.setStatus(200);
		
		User u = (User) repository.findUserByCredentials(user.getUsername(), user.getPassword());
		try {
		if (u == null) {
			response.setStatus(409);
			return null;
		}
		session.setAttribute("currentUser", u);
		System.out.println(u.getUsername());

		
	}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return u;
	}

	@PostMapping("/api/logout")
	public void logout(HttpSession session) {
		session.invalidate();
	}

}
