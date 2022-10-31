package berisha.project.service;

import berisha.project.dto.Order;
import berisha.project.dto.User;
import berisha.project.repo.OrderRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {
    private OrderRepo oRepo;
}
