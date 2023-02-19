import axios from "axios";

import { API_BASE_URL } from "./constants";

export const fetch = async (query: string) => {
	try {
        const response = await axios.get(`${API_BASE_URL}${query}`);
		return response.data;
	} catch (error) {
		return handleError(error);
	}
}

export const postData = async (query: string, data: Array<any>) => {
try {
	const response = await axios.post(`${API_BASE_URL}${query}`, data);
	return response.data;
} catch (error) {
	return handleError(error);
}
} 

const handleError = (error: any) => {
	throw error;
}
