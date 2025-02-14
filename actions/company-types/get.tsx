import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a list of all company types from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of company types
 */
const getCompanyTypes = async (): Promise<AxiosResponse<CompanyType[]>> => {
  return axios.get<CompanyType[]>(`${apiUrl}/api/company-type`);
};

export interface CompanyType {
  id: number;
  name: string;
}

export default getCompanyTypes;
