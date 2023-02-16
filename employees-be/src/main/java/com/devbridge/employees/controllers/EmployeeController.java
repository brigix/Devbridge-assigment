package com.devbridge.employees.controllers;
import com.devbridge.employees.models.dto.EmployeeDto;
import com.devbridge.employees.services.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.stream.Collectors.toList;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @GetMapping("/employees")
    public List<EmployeeDto> employeeControl() {
        return employeeService.getAllEmployees();
    }

    @PostMapping("/add")
    public String addEmployee(@RequestBody List<EmployeeDto> employeeDtoList){
    //    employeeDtoList.stream().map((employeeConverter.employeeEntityConvert()).collect(toList());
        employeeService.saveList(employeeDtoList);
        return "employee saved!";
    }
}
