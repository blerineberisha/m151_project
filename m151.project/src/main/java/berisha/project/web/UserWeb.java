package berisha.project.web;

import berisha.project.dto.User;
import berisha.project.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserWeb {

    @Autowired
    private final UserServiceImpl uService;

    @GetMapping
    @CrossOrigin(origins="localhost:3000")
    public List<User> getAll() {
        return uService.getUsers();
    }

    @GetMapping("/{username}")
    @CrossOrigin(origins = "http://localhost:3000")
    public User getByUsername(@PathVariable String username){
        return uService.getUser(username);
    }

    @PostMapping
    @CrossOrigin(origins = "localhost:3000")
    public User save(@RequestBody User user) {
        return uService.saveUser(user);
    }
}
