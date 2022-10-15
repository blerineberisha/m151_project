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
@Table(name = "author")
@Entity
public class Author {
    @Id
    @Column(name="author_id")
    private int author_id;
    @Column(name="firstname")
    private String firstname;
    @Column(name="lastname")
    private String lastname;

    @ManyToMany(mappedBy = "authors")
    private Set<Book> booksAuthors;
}
