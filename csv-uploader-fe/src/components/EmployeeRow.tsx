import React from "react";
import { Employee, Row } from "../models/types";
import { EmployeeCard, EmployeeColumn } from "../styled-components/components";

const EmployeeRow = ({
	employee,
	rowNumber,
}: {
	employee: Employee;
	rowNumber: number;
    }) => {
    
    const row: Row = !!(rowNumber % 2) ? Row.EVEN : Row.ODD
    
	return (
		<EmployeeCard row={row}>
			<EmployeeColumn>{employee.name}</EmployeeColumn>
			<EmployeeColumn>{employee.email}</EmployeeColumn>
			<EmployeeColumn>{employee.phone}</EmployeeColumn>
		</EmployeeCard>
	);
};

export default EmployeeRow;
