package com.devbridge.employees.converters;

import com.devbridge.employees.models.dto.EmployeeDto;
import com.devbridge.employees.models.entities.EmployeeEntity;

import org.springframework.stereotype.Component;

import java.util.List;
import static java.util.stream.Collectors.toList;

@Component
public class EmployeeConverter {

    public List<EmployeeDto> employeeDtoListConvert(List<EmployeeEntity> employeeEntityList) {
        return employeeEntityList.stream().map(this::employeeConvert).collect(toList());
    }

    public EmployeeDto employeeConvert(EmployeeEntity employeeEntity){
        EmployeeDto employeeDto = new EmployeeDto(employeeEntity.getName(), employeeEntity.getEmail(), employeeEntity.getPhone());
        return employeeDto;
    }
    public EmployeeEntity employeeEntityConvert(EmployeeDto employeeDto){
        EmployeeEntity employeeEntity = new EmployeeEntity(employeeDto.getName(), employeeDto.getEmail(), employeeDto.getPhone());
        return employeeEntity;
    }

    public List<EmployeeEntity> employeeEntityListConverter(List<EmployeeDto> employeeDtoList) {
        List<EmployeeEntity> employeeEntityList = employeeDtoList.stream().map(this::employeeEntityConvert).collect(toList());
        return employeeEntityList;
    }
}
