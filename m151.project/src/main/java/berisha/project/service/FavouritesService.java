package berisha.project.service;

import berisha.project.dto.Favourites;
import berisha.project.repo.FavouritesRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class FavouritesService {

    private final FavouritesRepo favRepo;

    public Favourites saveFavorites(Favourites entity) {
        return favRepo.save(entity);
    }

    public List<Favourites> findAll() {
        return favRepo.findAll();
    }

}
