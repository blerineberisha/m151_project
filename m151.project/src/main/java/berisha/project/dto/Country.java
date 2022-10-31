package berisha.project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "country")
@Entity
public class Country {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "country_id")
    private int country_id;
    @Column(name="name")
    private String name;
}
