import React from "react";
import { Employee } from "../models/types";
import {
	EmployeeContainerDiv,
	CenterContainer,
    EmployeeColumn,
} from "../styled-components/components";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeRow from "./EmployeeRow";

const EmployeeContainer = ({ employees }: { employees: Array<Employee> }) => {
   
	return (
		<CenterContainer>
			<EmployeeContainerDiv>
				<EmployeeHeader />
                {   employees.map((employee: Employee) => {
                    return (
											<EmployeeRow
												employee={employee}
												rowNumber={employees.indexOf(employee)}
												key={employee.name + employee.email + employee.phone}
											/>
										);
				})}
			</EmployeeContainerDiv>
		</CenterContainer>
	);
};

export default EmployeeContainer;
