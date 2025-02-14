import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Handle delete data from path api/city/:id
 *
 * @param id The city ID to delete
 * @returns A promise that resolves to an AxiosResponse containing the deleted data
 */
export const deleteCity = async (
  id: number
): Promise<AxiosResponse<{ id: number }>> => {
  return axios.delete<{ id: number }>(`${apiUrl}/api/city/${id}`);
};
