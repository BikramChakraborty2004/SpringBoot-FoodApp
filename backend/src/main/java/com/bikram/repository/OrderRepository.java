package com.bikram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bikram.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

	@Query(
			nativeQuery = true,
			value="select o.oid,o.odt,o.fid,f.fname,o.qty,f.price,o.qty*f.price netprice, o.uname from order_dtls o join food f on(o.fid=f.fid)"
			
			)
public List getbills();
}
