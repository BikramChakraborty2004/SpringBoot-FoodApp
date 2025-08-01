package com.bikram.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bikram.model.Register;
import com.bikram.service.RegisterService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/register")
public class RegisterController {

	@Autowired
	private RegisterService rservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Register r)
	{
		String msg="REGISTER SUCCESSFULL";
		rservice.addData(r);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Register>>getData()
	{
		List<Register>rlist=rservice.getData();
		return new ResponseEntity<List<Register>>(rlist,HttpStatus.OK);
	}
	@GetMapping("/login/{uname}/{pass}")
	public ResponseEntity<String> checkLogin(@PathVariable String uname, @PathVariable String pass)
	{
		String msg=null;
		Register r=rservice.checkLogin(uname, pass);
		if(r!=null)
		{
			msg="LOGIN SUCCESSFULL";
		}
		else
		{
			msg ="LOGIN DENIED";
		}
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
}
