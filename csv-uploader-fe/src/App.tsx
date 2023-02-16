import { ThemeProvider } from "styled-components";
import { theme } from "./styled-components/theme";
import FileUpload from "./components/FileUpload";


function App() {
	return (
		<ThemeProvider theme={theme}>
				<FileUpload />
		</ThemeProvider>
	);
}

export default App;
