import { postDataAPI } from "./constants";
import { fetch, postData } from "./requests";

export const getEmployees = async () => {
	const employees = await fetch("/employees");
	return employees;
};

export const postEmployees = async (employeesList) => {
	const employees = await postData(postDataAPI, employeesList);
	return employees;
}
