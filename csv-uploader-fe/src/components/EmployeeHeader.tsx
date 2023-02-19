import React from 'react'
import { Employee, Row } from '../models/types';
import { EmployeeColumn, HeaderCard } from "../styled-components/components";

const EmployeeHeader = () => {
    const headers: Employee = {
        name: "Name",
        email: "Email",
        phone: "Phone number",
    };
    return (
        <HeaderCard row={Row.EVEN}>
			<EmployeeColumn>{headers.name}</EmployeeColumn>
			<EmployeeColumn>{headers.email}</EmployeeColumn>
			<EmployeeColumn>{headers.phone}</EmployeeColumn>
		</HeaderCard>
	);
}

export default EmployeeHeader