import { Employee } from "../../models/types";
import { postDataAPI } from "./constants";
import { fetch, postData } from "./requests";

export const getEmployees = async () => {
	try {
		const employees = await fetch("/employees");
		return employees;
	} catch (error) {
		return { error };
	}
};

export const postEmployees = async (employeesList: Array<Employee>) => {
	try {
		const employees: Array<Employee> = await postData(
			postDataAPI,
			employeesList
		);
		return employees;
	} catch (err: any) {
		return handleError(err);
	}
};

const handleError = (error: any) => {
	throw error;
};
