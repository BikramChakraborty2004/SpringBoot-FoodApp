package com.bikram.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bikram.model.Food;
import com.bikram.repository.FoodRepository;

@Service
public class FoodService {
	
	@Autowired
	private FoodRepository frepo;
	public void addData(Food f)
	{
		frepo.save(f);
	}
	public List<Food> getData()
	{
		return frepo.findAll();
	}
	public void deleteData(String pid)
	{
		Food f=frepo.findById(pid).orElse(null);
		if(f!=null)
		{
			frepo.delete(f);
		}
	}
	public Food updateData(String pid,Food pst)
	{
		String msg="DATA UPDATE SUCCEFFFULLY";
		Food f=frepo.findById(pid).orElse(null);
		if(f!=null)
		{
			f.setFname(pst.getFname());
			f.setPrice(pst.getPrice());
		
			frepo.save(f);
		}
		return f;
	}
	public Food getPidDetails(String pid)
	{
		return frepo.findById(pid).orElse(null);
	}
}
