package berisha.project.service;

import berisha.project.dto.Book;
import berisha.project.dto.Cart;
import berisha.project.repo.CartRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CartService {
    private final CartRepo cRepo;

    public Cart getCart(int id){
        return cRepo.getReferenceById(id);
    }

    public Cart save(Cart cart, Book book){
        cart.getBooks().add(book);
        return cRepo.save(cart);
    }
}
