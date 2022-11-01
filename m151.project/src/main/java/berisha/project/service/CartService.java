package berisha.project.service;

import berisha.project.dto.Book;
import berisha.project.dto.Cart;
import berisha.project.dto.User;
import berisha.project.repo.CartRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CartService {
    private final CartRepo cRepo;
    private final UserServiceImpl uRepo;

    private final BookService bServ;

    public List<Book> getByUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = uRepo.getUser(auth.getName());
        return cRepo.findAllByUser(user).getBooks();
    }

    public Cart getCart(int id) {
        return cRepo.getReferenceById(id);
    }

    public void deleteItem(String id) {
        List<Book> books = getByUser();
        books.remove(bServ.getBook(id));
    }

    public void add(Book book) {
        List<Book> books = getByUser();
        books.add(books.size(), book);
    }
}
