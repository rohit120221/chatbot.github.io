package com.gogreen.gogreen.repository;

	import java.util.Optional;
	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;
	import com.gogreen.gogreen.models.ERole;
	import com.gogreen.gogreen.models.Role;
	@Repository
	public interface RoleRepository extends JpaRepository<Role, Long> {
	  Optional<Role> findByName(ERole name);
}
