import { ThemeProvider } from "styled-components";
import { theme } from "./styled-components/theme";
import FileUpload from "./components/FileUpload";
import { useEffect, useState } from "react";
import { Employee } from "./models/types";
import { convertData } from "./helpers/utils";
import { postEmployees } from "./helpers/fetching/fetchData";
import EmployeeContainer from "./components/EmployeeContainer";

function App() {
	const [employees, setEmployees] = useState<Array<Employee>>([]);
	const [showEmployees, setShowEmployees] = useState<boolean>(false);

	useEffect(() => {
		console.log("after post", employees);
		setShowEmployees(true);
	}, [employees]);

	const setDataFromFile = async (data: string) => {
		const employeesList: Array<Employee> = convertData(data);
		console.log(employeesList);
		const postedEmployees: Array<Employee> = await postEmployees(employeesList);
		setEmployees(postedEmployees);
	};

	return (
		<ThemeProvider theme={theme}>
			<FileUpload setDataFromFile={setDataFromFile} />
			{showEmployees && <EmployeeContainer employees={employees} />}
		</ThemeProvider>
	);
}

export default App;
