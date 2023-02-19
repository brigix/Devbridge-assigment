import styled from "styled-components";
import { Row } from "../models/types";

interface ToggleProps {
	readonly isSelected: boolean;
}
interface TableProps {
	readonly row: Row;
}

export const CenterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	margin: 0rem;
`;

export const Button = styled.button`
	color: ${(props) => props.theme.colors.light};
    background-color ${(props) => props.theme.colors.secondary};
	font-size: 1em;
    font-weight: 500;
	padding: 0.25em 1em;
	margin: 1rem;
	border-radius: 2rem;
    border: 0.15rem solid ${(props) => props.theme.colors.secondary};
    transition: 0.5s;
    &:hover {
		background-color: ${(props) => props.theme.colors.hover};
        border: 0.15rem solid ${(props) => props.theme.colors.hover};
        cursor: pointer;
	}
`;

export const EmployeeContainerDiv = styled(CenterContainer)`
	width: 66vw;
	border 0.1rem solid ${(props) => props.theme.colors.secondary};
	border-right: 0;
`;

export const EmployeeCard = styled.div<TableProps>`
	display: flex;
	flex-direction: row;
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) =>
		(props.row === Row.EVEN) ? props.theme.colors.even : props.theme.colors.odd};
	margin: 0rem;
	padding: 0rem;
	width: 100%;
	text-align: center;
`;

export const HeaderCard = styled(EmployeeCard)`
	color: ${(props) => props.theme.colors.light};
	background-color: ${(props) => props.theme.colors.secondary};
`;

export const EmployeeColumn = styled.div`
	width: 33.33%;
	border-right 0.1rem solid ${(props) => props.theme.colors.secondary};
	padding: 0.2rem;
`;

export const ErrorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem;
	height: 85vh;
`;
export const ErrorMessage = styled.div`
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.error};
	font-size: 2rem;
	font-weight: 700;
	border: 0.2rem solid;
	height: fit-content;
	width: fit-content;
	padding: 1rem 4rem;
`;
