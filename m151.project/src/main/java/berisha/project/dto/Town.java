package berisha.project.dto;

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
    @JoinColumn(name = "id_country", referencedColumnName = "country_id")
    private Country id_country;
}
