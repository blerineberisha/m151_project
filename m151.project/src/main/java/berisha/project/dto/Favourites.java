package berisha.project.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name="favourites")
@Entity
public class Favourites {
    @Id
    @Column(name="list_id")
    private int list_id;
    @Column(name="list_name")
    private String list_name;

    @ManyToMany(mappedBy = "favouriteLists")
    private Set<Book> books;
}
