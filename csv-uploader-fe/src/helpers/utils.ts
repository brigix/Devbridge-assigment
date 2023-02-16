import { Employee } from "../models/types";

export const convertData = (data: any): Array<Employee> => {
	const convertedData: Array<Employee> = data.map((d: any) => {
		const employee: Employee = { name: "", email: "", phone: "" };
		for (const [key, value] of Object.entries(d)) {
			if (key.toLowerCase().includes("name")) {
				employee.name = value as string;
			}
			if (key.toLowerCase().includes("email")) {
				employee.email = value as string;
			}
			if (key.toLowerCase().includes("phone")) {
				employee.phone = value as string;
			}
		}
		if (employee.name !== "") {
			return employee;
		}
	});
	return convertedData;
};
