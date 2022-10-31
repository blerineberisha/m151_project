package berisha.project.dto;

import lombok.*;

import javax.persistence.*;
import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "users")
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int user_id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "streetname")
    private String streetname;

    @Column(name = "housenr")
    private String housenr;

    @ManyToOne
    @JoinColumn(name = "town_zip", referencedColumnName = "zip")
    private Town town_zip;

    @ManyToMany
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(
                    name = "id_user",
                    referencedColumnName = "user_id"),
            inverseJoinColumns = @JoinColumn(
                    name = "id_role",
                    referencedColumnName = "role_id"))
    private List<Role> roles = new ArrayList<>();
}
