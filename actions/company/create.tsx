import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Create a new company in the Coptera API
 *
 * @param data The data to create a new company
 * @returns A promise that resolves to an AxiosResponse containing the newly created company
 */
const createCompany = async <T extends Record<string, unknown>>(
  data: T
): Promise<AxiosResponse<T>> => {
  return axios.post<T>(`${apiUrl}/api/company`, data);
};

export default createCompany;
