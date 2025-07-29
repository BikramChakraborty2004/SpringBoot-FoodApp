package com.bikram.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bikram.model.Order;
import com.bikram.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/order")
public class OrderController {

	@Autowired
	private OrderService oservice;
	@PostMapping("/add")
	public ResponseEntity<String>adddata(@RequestBody Order o)
	{
		String msg="FOOD ORDER SUCCESSFULLY";
		oservice.addData(o);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/billing")
	public ResponseEntity<List> getData()
	{
		List blist=oservice.getBilling();
		return new ResponseEntity<List>(blist,HttpStatus.OK);
	}
}
