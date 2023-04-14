package de.neuefische.backend.security;

import de.neuefische.backend.service.IdService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import de.neuefische.backend.service.IdService;


@Service
@RequiredArgsConstructor
public class MongoUserDetailsService implements UserDetailsService {

    private final MongoUserRepository mongoUserRepository;
    private final IdService idService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MongoUser mongoUser = mongoUserRepository.findMongoUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with name: " + username + " not found!"));

        return User.builder()
                .username(mongoUser.username())
                .password(mongoUser.password())
                .roles(mongoUser.role().toString()).build();
    }

    public MongoUser findMongoUserByUsername(String username) {
        return mongoUserRepository.findMongoUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with name: " + username + " not found!"));
    }


    public MongoUser saveUser(MongoUser user) {
        String newId = idService.createId();
        MongoUser newUser = new MongoUser(
                newId,
                user.username(),
                user.password(),
                user.role()
                );
                return mongoUserRepository.save(newUser);
    }
}
