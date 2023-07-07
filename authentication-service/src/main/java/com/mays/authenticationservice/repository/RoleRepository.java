package com.mays.authenticationservice.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mays.authenticationservice.models.ERole;
import com.mays.authenticationservice.models.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
