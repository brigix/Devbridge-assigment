import React, { SyntheticEvent, useRef } from "react";
import { ChangeEvent, useState } from "react";
import Papa from "papaparse";
import {
	Button,
	CenterContainer,
} from "../styled-components/components";

const FileUpload = ({
	setDataFromFile,
}: {
	setDataFromFile: (data: string) => void;
}) => {
	const hiddenFileInput = useRef<HTMLInputElement>(null);
	const [file, setFile] = useState<File>();

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
			Papa.parse(e.target.files[0], {
				header: true,
				skipEmptyLines: true,
				complete: function (results: { data: any }) {
					setDataFromFile(results.data);
				},
			});
		}
	};

	const handleChooseFileClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (hiddenFileInput.current !== null) {
			hiddenFileInput.current.click();
		}
	};

	return (
		<CenterContainer>
			<input
				type="file"
				onChange={handleFileChange}
				accept=".csv"
				ref={hiddenFileInput}
				style={{ display: "none" }}
			/>
			<Button onClick={handleChooseFileClick}>Choose CSV file</Button>
			<div>{file && `${file.name} - ${file.type}`}</div>

			
		</CenterContainer>
	);
};

export default FileUpload;
