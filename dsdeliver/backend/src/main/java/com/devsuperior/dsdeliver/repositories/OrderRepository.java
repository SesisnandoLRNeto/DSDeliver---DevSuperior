package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>  {

	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products" //colecao da Class Order chama products
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC") //status 0 é o tipo Pending, ordenando para o mais recente
	List<Order> findOrdersWithProducts();
}
