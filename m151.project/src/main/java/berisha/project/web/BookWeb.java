package berisha.project.web;

import berisha.project.dto.Book;
import berisha.project.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/books")
public class BookWeb {

    private final BookService bServ;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Book> getBooks(){
        return bServ.getAll();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Book findAuthor(@PathVariable("id") String id){
        return bServ.getBook(id);
    }
}
