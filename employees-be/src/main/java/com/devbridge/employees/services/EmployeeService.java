package com.devbridge.employees.services;

import com.devbridge.employees.converters.EmployeeConverter;
import com.devbridge.employees.models.dto.EmployeeDto;
import com.devbridge.employees.models.entities.EmployeeEntity;
import com.devbridge.employees.repositories.EmployeeRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;
    private EmployeeConverter employeeConverter;

    public EmployeeService(EmployeeRepository employeeRepository, EmployeeConverter employeeConverter){
        this.employeeRepository = employeeRepository;
        this.employeeConverter = employeeConverter;
    }
    public List<EmployeeDto> getAllEmployees() {
        List<EmployeeEntity>  employeeEntityList = employeeRepository.findAll();
        List<EmployeeDto> employeeDtoList = employeeConverter.employeeDtoListConvert(employeeEntityList);
        return employeeDtoList;
    }
    public List<EmployeeEntity> saveList(List<EmployeeDto> employeeDtoList) {
        List<EmployeeEntity> currentEmployeeEntityList = employeeRepository.findAll();
        List<EmployeeDto> currentEmployeeDtoList = employeeConverter.employeeDtoListConvert(currentEmployeeEntityList);
        currentEmployeeDtoList.forEach(entity -> employeeDtoList.removeIf(x -> x.contains(entity)));
        List<EmployeeEntity> employeeEntityList = employeeConverter.employeeEntityListConverter(employeeDtoList);
        return employeeEntityList.stream().map(employee -> employeeRepository.save(employee)).collect(Collectors.toList());
        //return employeeRepository.saveAll(employeeEntityList);
    }
}
