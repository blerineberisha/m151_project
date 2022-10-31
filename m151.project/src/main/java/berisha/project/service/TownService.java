package berisha.project.service;

import berisha.project.dto.Town;
import berisha.project.repo.TownRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TownService {
    private final TownRepo tRepo;

    public List<Town> getAllTowns(){
        return tRepo.findAll();
    }

    public Town addTown(Town town){return tRepo.save(town);}
}
