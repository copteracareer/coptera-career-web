import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Handle delete data from path api/company/:id
 *
 * @param id The company ID to delete
 * @returns A promise that resolves to an AxiosResponse containing the deleted data
 */
const deleteCompany = async (
  id: number
): Promise<AxiosResponse<{ id: number }>> => {
  return axios.delete<{ id: number }>(`${apiUrl}/api/company/${id}`);
};

export default deleteCompany;
