package berisha.project.web;

import berisha.project.dto.Book;
import berisha.project.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
