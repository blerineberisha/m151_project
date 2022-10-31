package berisha.project.service;

import berisha.project.dto.Town;
import berisha.project.repo.TownRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class TownService {
    private final TownRepo tRepo;

    public List<Town> getAllTowns(){
        return tRepo.findAll();
    }

    public Town addTown(Town town){return tRepo.save(town);}

    public Town findById(String id){
        return tRepo.getReferenceById(id);
    }
}
