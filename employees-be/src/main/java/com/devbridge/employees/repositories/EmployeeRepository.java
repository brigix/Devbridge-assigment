package com.devbridge.employees.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.devbridge.employees.models.entities.EmployeeEntity;

import java.util.List;

@Repository
public interface EmployeeRepository extends CrudRepository<EmployeeEntity, Integer>{
    List<EmployeeEntity> findAll();

    //List<EmployeeEntity> saveAll(List<EmployeeEntity> employeeEntityList);

    EmployeeEntity save(EmployeeEntity employeeEntity);
}
