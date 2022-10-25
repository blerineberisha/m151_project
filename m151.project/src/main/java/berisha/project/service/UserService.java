package berisha.project.service;
import berisha.project.dto.Role;
import berisha.project.dto.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User saveUser(User user);

    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);

    User getUser(String username);

    List<User> getUsers();

    User loginUser(String username, String password);
}