package com.devbridge.employees.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Employees")
public class EmployeeEntity extends AbstractEntity {

    @Column(name = "name", length = 50, nullable = false)
    private String name;

    @Column(name = "email", length = 50, nullable = false)
    private String email;

    @Column(name = "phone", nullable = false)
    private String phone;
}
