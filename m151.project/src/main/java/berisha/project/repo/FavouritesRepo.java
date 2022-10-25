package berisha.project.repo;

import berisha.project.dto.Favourites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavouritesRepo extends JpaRepository<Favourites, Integer> {
}
