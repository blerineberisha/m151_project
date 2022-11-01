package berisha.project.web;

import berisha.project.dto.Book;
import berisha.project.dto.Cart;
import berisha.project.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CartWeb {

    private final CartService cServ;

    @PostMapping("/cart")
    @CrossOrigin
    public Cart addBook(@RequestBody Cart cart, @RequestBody Book book){
        return cServ.save(cart, book);
    }

    @GetMapping("/cart/{id}")
    @CrossOrigin
    public List<Book> getCart(@PathVariable("id") int id){
        return cServ.getCart(id).getBooks();
    }
}
