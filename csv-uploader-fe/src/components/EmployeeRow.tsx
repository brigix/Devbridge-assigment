import React from "react";
import { Employee } from "../models/types";
import { EmployeeCard } from "../styled-components/components";

const EmployeeRow = ({ employee }: { employee: Employee }) => {
	return (
		<EmployeeCard>
			{employee.name} {employee.email} {employee.phone}
		</EmployeeCard>
	);
};

export default EmployeeRow;
