package com.devbridge.employees.models.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class EmployeeDto {
    private String name;
    private String email;
    private String phone;

    public boolean contains(EmployeeDto entity) {
        if (this.name.equals(entity.name) && this.email.equals(entity.email) && this.phone.equals(entity.phone)) {
            return true;
        }
        else {
            return false;
        }
    }
}
