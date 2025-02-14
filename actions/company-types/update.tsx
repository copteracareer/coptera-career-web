import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Update a company type in the Coptera API
 *
 * @param id The company type ID to update
 * @param data The data to update the company type
 * @returns A promise that resolves to an AxiosResponse containing the updated company type
 */
export const updateCompanyType = async (
  id: number,
  data: {
    name: string;
  }
): Promise<AxiosResponse<{ id: number; name: string }>> => {
  return axios.put<{ id: number; name: string }>(
    `${apiUrl}/api/company-type/${id}`,
    data
  );
};
