package berisha.project.web;

import berisha.project.dto.Book;
import berisha.project.dto.Cart;
import berisha.project.dto.User;
import berisha.project.service.CartService;
import berisha.project.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class CartWeb {

    private final CartService cServ;
    private final UserServiceImpl uServ;

    /*@PostMapping("/cart")
    @CrossOrigin
    public Cart addBook(@RequestBody Book book, Principal p){
        User user = uServ.getUser(p.getName());
        return cServ.getCart(user.getCart().getCart_id()).getBooks().add(book);
    }
*/
    @GetMapping("/cart/")
    @CrossOrigin("http://localhost:3000")
    public List<Book> getCart(){
        return cServ.getByUser();
    }

    @DeleteMapping("/cart/{id}")
    @CrossOrigin("http://localhost:3000")
    public void deleteBook(@PathVariable("id") String id){
        cServ.deleteItem(id);
    }

    @PostMapping("/cart/")
    @CrossOrigin("http://localhost:3000")
    public void addBook(@RequestBody Book book){
        cServ.add(book);
    }
}
