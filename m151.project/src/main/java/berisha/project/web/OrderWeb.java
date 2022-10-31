package berisha.project.web;

import berisha.project.dto.Order;
import berisha.project.service.OrderService;
import berisha.project.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/orders")
public class OrderWeb {
    private final OrderService oServ;
    private final UserServiceImpl uServ;

}
