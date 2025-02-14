import axios, { AxiosResponse } from "axios";
import { Company } from "@/model/company";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a list of all companies from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of companies
 */
const getCompanies = async (): Promise<AxiosResponse<Company[]>> => {
  return axios.get<Company[]>(`${apiUrl}/api/company`);
};

export default getCompanies;
