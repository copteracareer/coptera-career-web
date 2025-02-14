import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Retrieve a company type by id from the Coptera API
 *
 * @param id The company type ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the company type
 */
export const getCompanyTypeById = async (
  id: number
): Promise<AxiosResponse<CompanyType>> => {
  return axios.get<CompanyType>(`${apiUrl}/api/company-type/${id}`);
};

export interface CompanyType {
  id: number;
  name: string;
}
