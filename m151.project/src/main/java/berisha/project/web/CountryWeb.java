package berisha.project.web;

import berisha.project.dto.Country;
import berisha.project.dto.Town;
import berisha.project.service.CountryService;
import berisha.project.service.TownService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/countries")
@RequiredArgsConstructor
public class CountryWeb {
    private final CountryService cService;
    private final TownService tService;

    @GetMapping("")
    public List<Country> getAll() {
        return cService.getCountries();
    }

    @GetMapping("/towns")
    public List<Town> getAllTowns() {
        return tService.getAllTowns();
    }
}
