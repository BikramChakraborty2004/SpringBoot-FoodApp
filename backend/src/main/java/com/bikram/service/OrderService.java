package com.bikram.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bikram.model.Order;
import com.bikram.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orepo;
		public void addData(Order o) {
			orepo.save(o);
		}
		public List getBilling() {
			return orepo.getbills();
		}
}
