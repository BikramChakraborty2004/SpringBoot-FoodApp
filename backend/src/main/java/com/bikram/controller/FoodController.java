package com.bikram.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bikram.model.Food;
import com.bikram.service.FoodService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/food")
public class FoodController {

	@Autowired
	private FoodService fservice;
	@PostMapping("/add")
	
	
	public ResponseEntity<String>addData(@RequestBody Food f)
	{
		String msg="DATA INSERTED";
		fservice.addData(f);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Food>>getData()
	{
		List<Food> flist=fservice.getData();
		return new ResponseEntity<List<Food>>(flist,HttpStatus.OK);
	}
	@DeleteMapping("/del/{pid}")
	public ResponseEntity<String>deleteData(@PathVariable String pid)
	{
		String msg="DELETE";
		fservice.deleteData(pid);
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	@PutMapping("/up/{fid}")
	public ResponseEntity<String>updateEntity(@PathVariable String fid,@RequestBody Food f)
	{
		String msg;
		Food fs=fservice.updateData(fid, f);
		
		if(fs!=null)
		{
			msg="FOOD ITEM UPDATE SUCCESSFULLY";
		}
		else
		{
			msg="UPDATE NOT DONE";
		}
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	@GetMapping("/fetch/{pid}")
	public ResponseEntity<Food>getPidDetails(@PathVariable String pid)
	{
		Food ps=fservice.getPidDetails(pid);
		return new ResponseEntity<Food>(ps,HttpStatus.OK);
	}
}
