package berisha.project.dto;

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
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="list_id")
    private int list_id;

    @Column(name="list_name")
    private String list_name;

    @ManyToMany@JoinTable(
            name = "favourites_books",
            joinColumns = @JoinColumn(name = "list_id"),
            inverseJoinColumns = @JoinColumn(name = "isbn", referencedColumnName = "isbn")
    )
    private Set<Book> books;
}
