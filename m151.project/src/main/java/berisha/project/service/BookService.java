package berisha.project.service;

import berisha.project.dto.Book;
import berisha.project.repo.BookRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class BookService {

    private final BookRepo bRepo;

    public List<Book> getAll(){
        return bRepo.findAll();
    }
}
