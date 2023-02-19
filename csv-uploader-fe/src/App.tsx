import { ThemeProvider } from "styled-components";
import { theme } from "./styled-components/theme";
import FileUpload from "./components/FileUpload";
import { useState } from "react";
import { Employee } from "./models/types";
import { convertData } from "./helpers/utils";
import { postEmployees } from "./helpers/fetching/fetchData";
import EmployeeContainer from "./components/EmployeeContainer";
import ErrorDiv from "./components/ErrorDiv";
import { Button, CenterContainer } from "./styled-components/components";
import Spinner from "./components/Spinner";

function App() {
	const [employees, setEmployees] = useState<Array<Employee>>([]);
	const [employeesToUpload, setEmployeesToUpload] = useState<Array<Employee>>(
		[]
  );

  const [errMessage, setErrMessage] = useState<string | undefined>();
	const [isLoadedEmployees, setIsLoadedEmployees] = useState<boolean>(false);
	const [isFileRead, setIsFileRead] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const setDataFromFile = (data: string) => {
		const employeesList: Array<Employee> = convertData(data).filter(
			(employee) => employee !== undefined
		);
		if (employeesList.length === 0) {
			setErrMessage("Check the file, something wrong");
			setIsFileRead(false);
		} else {
			setEmployeesToUpload(employeesList);
			setIsFileRead(true);
      setErrMessage(undefined);
		}
	};

	const handleUploadClick = async () => {
    setIsLoading(true);
		try {
			const postedEmployees: Array<Employee> | unknown = await postEmployees(
				employeesToUpload
			)
				.then((res) => {
					setEmployees(res as Array<Employee>);
					setIsLoadedEmployees(true);
					setIsLoading(false);
					return res;
				})
				.catch((error) => {
					setErrMessage(error.message);
					setIsLoading(false);
				});
		} catch (err: any) {
      setErrMessage(err.toString());
			setIsLoading(false);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<CenterContainer>
				<FileUpload setDataFromFile={setDataFromFile} />
				{!!errMessage && <ErrorDiv err={errMessage} />}
				{isFileRead && <Button onClick={handleUploadClick}>Upload</Button>}
				{isLoading ? (
					<Spinner />
				) : (
					isLoadedEmployees && <EmployeeContainer employees={employees} />
				)}
			</CenterContainer>
		</ThemeProvider>
	);
}

export default App;
