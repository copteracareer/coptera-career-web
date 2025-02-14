import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Handle delete data from path api/company-type/:id
 *
 * @param id The company type ID to delete
 * @returns A promise that resolves to an AxiosResponse containing the deleted data
 */
export const deleteCompanyType = async (
  id: number
): Promise<AxiosResponse<{ id: number }>> => {
  return axios.delete<{ id: number }>(`${apiUrl}/api/company-type/${id}`);
};

