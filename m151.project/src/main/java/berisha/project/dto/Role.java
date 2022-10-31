package berisha.project.dto;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@RequiredArgsConstructor
@Setter
@Getter
@Table(name="role")
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "role_id")
    private int role_id;
    @Column(name = "name")
    private String name;
}
