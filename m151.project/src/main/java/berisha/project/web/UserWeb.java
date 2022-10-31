package berisha.project.web;

import berisha.project.dto.User;
import berisha.project.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserWeb {

    @Autowired
    private final UserServiceImpl uService;

    @GetMapping("/users")
    @CrossOrigin(origins="http://localhost:3000")
    public List<User> getAll() {
        return uService.getUsers();
    }

    @GetMapping("/{username}")
    @CrossOrigin(origins = "http://localhost:3000")
    public User getByUsername(@PathVariable String username){
        return uService.getUser(username);
    }

    @PostMapping("users")
    @CrossOrigin(origins = "http://localhost:3000")
    public User save(@RequestBody User user) {
        return uService.saveUser(user);
    }

    @DeleteMapping("/{username}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteUser(@PathVariable("username") String username){
        uService.deleteUser(username);
    }
}
