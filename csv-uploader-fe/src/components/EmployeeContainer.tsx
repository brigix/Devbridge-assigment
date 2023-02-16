import React from "react";
import { Employee } from "../models/types";
import { CenterContainer } from "../styled-components/components";
import EmployeeRow from "./EmployeeRow";

const EmployeeContainer = ({ employees }: { employees: Array<Employee> }) => {
	return (
		<CenterContainer>
			{employees.map((employee: Employee) => {
				return <EmployeeRow employee={employee} />;
			})}
		</CenterContainer>
	);
};

export default EmployeeContainer;
