package berisha.project.repo;

import berisha.project.dto.Town;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TownRepo extends JpaRepository<Town, Integer> {
}
