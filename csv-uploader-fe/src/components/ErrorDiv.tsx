import React from "react";
import { ErrorContainer, ErrorMessage } from "../styled-components/components";

const ErrorDiv = ({ err }: { err: string | undefined }) => {
	return (
		<ErrorContainer>
			<ErrorMessage>{err}</ErrorMessage>
		</ErrorContainer>
	);
};

export default ErrorDiv;
