package com.devbridge.employees.models.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class EmployeeDto {
    private Integer id;
    private String name;
    private String email;
    private String phone;
}
