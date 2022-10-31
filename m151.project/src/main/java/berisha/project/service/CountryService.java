package berisha.project.service;

import berisha.project.dto.Country;
import berisha.project.repo.CountryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CountryService {
    private final CountryRepo cRepo;

    public List<Country> getCountries(){
        return cRepo.findAll();
    }

    public Country saveCountry(Country country){
        return cRepo.save(country);
    }

    public void deleteCountry(int countryId){cRepo.deleteById(countryId);}
}
