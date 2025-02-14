import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Create a new company type in the Coptera API
 *
 * @param data The data to create a new company type
 * @returns A promise that resolves to an AxiosResponse containing the newly created company type
 */
export const createCompanyType = async (data: {
  name: string;
}): Promise<AxiosResponse<{ id: number; name: string }>> => {
  return axios.post<{ id: number; name: string }>(
    `${apiUrl}/api/company-type`,
    data
  );
};
