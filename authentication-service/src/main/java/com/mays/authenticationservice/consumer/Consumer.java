package com.mays.authenticationservice.consumer;

import java.util.HashSet;
import java.util.Set;

import com.mays.authenticationservice.config.RabbitMQConfig;
import com.mays.authenticationservice.models.UserInfo;
import com.mays.authenticationservice.repository.RoleRepository;
import com.mays.authenticationservice.repository.UserRepository;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.mays.authenticationservice.models.ERole;
import com.mays.authenticationservice.models.Role;
import com.mays.authenticationservice.models.User;

@Component
public class Consumer {

	@Autowired
	PasswordEncoder encoder;
	@Autowired
    RoleRepository roleRepository;

	@Autowired
    UserRepository userRepository;

	@RabbitListener(queues = RabbitMQConfig.QUEUE)
	public void consumeMessageFromQueue(UserInfo userInfo) {
		System.out.println("Message recieved from queue : " + userInfo);
		User user = new User(null, userInfo.getUserEmail(),

				encoder.encode(userInfo.getPassword()), null);

		String strRoles = userInfo.getRole();

		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
	    	
	      Role userRole = roleRepository.findByName(ERole.ROLE_CUSTOMER)
	          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	      roles.add(userRole);
	    } else {
		switch (strRoles) {
		case "SHOPOWNER":
			Role operatorRole = roleRepository.findByName(ERole.ROLE_SHOPOWNER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(operatorRole);

			break;

		default:
			Role userRole = roleRepository.findByName(ERole.ROLE_CUSTOMER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		}
	    }
		user.setRoles(roles);
		userRepository.save(user);

	}

}
