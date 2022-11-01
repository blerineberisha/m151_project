package berisha.project.dto;

import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@RequiredArgsConstructor
@Setter
@Getter
@Table(name = "cart")
@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private int cart_id;

    @OneToOne(targetEntity = User.class)
    @JoinColumn(name = "id_user",
            referencedColumnName = "user_id")
    private User user;

    @ManyToMany
    @JoinTable(name = "books_carts",
            joinColumns = @JoinColumn(name = "id_cart",
                    referencedColumnName = "cart_id"),
            inverseJoinColumns = @JoinColumn(name = "isbn",
                    referencedColumnName = "isbn"))
    private List<Book> books;
}
