package berisha.project.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name="town")
@Entity
public class Town {
    @Id
    @Column(name="zip")
    private String zip;
    @Column(name="name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country_id;
}
