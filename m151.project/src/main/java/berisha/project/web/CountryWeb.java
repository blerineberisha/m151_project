package berisha.project.web;

import berisha.project.dto.Country;
import berisha.project.dto.Town;
import berisha.project.service.CountryService;
import berisha.project.service.TownService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
@RequiredArgsConstructor
public class CountryWeb {
    private final CountryService cService;
    private final TownService tService;

    @GetMapping("")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Country> getAll() {
        return cService.getCountries();
    }

    @GetMapping("/towns")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Town> getAllTowns() {
        return tService.getAllTowns();
    }

    @PostMapping("/towns")
    @CrossOrigin(origins = "http://localhost:3000")
    public Town addTown(@RequestBody Town town){
        return tService.addTown(town);
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public Country addCountry(@RequestBody Country country){
        return cService.saveCountry(country);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteCountry(@PathVariable("id") int id){
        cService.deleteCountry(id);
    }
}
