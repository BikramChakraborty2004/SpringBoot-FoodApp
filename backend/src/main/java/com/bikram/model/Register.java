package com.bikram.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Register{
	@Id
	@Column(length =15)
	private String uname;
	@Column(length =10,nullable = false)
	private String pass; 
	@Column(length=25, nullable = false)
	private String nm;
	@Column(length = 30, nullable = false)
	private String phno;
	@Column(length = 30 ,nullable = false)
	private String email;
	
}
