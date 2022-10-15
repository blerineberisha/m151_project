package berisha.project.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name="role")
@Entity
public class Role {
    @Id
    @Column(name = "role_id")
    private int role_id;
    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "userRoles")
    private Set<Users> userSet;
}
