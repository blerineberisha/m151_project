package berisha.project.web;

import berisha.project.dto.User;
import berisha.project.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserWeb {
    private final UserServiceImpl uService;

    @GetMapping("")
    @CrossOrigin("localhost:3000")
    public List<User> findUsers() {
        return uService.getUsers();
    }

    @PostMapping("")
    @CrossOrigin("localhost:3000")
    public User save(User user) {
        return uService.saveUser(user);
    }
}
