import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Handle delete data from path api/province/:id
 *
 * @param id The province ID to delete
 * @returns A promise that resolves to an AxiosResponse containing the deleted data
 */
export const deleteProvince = async (
  id: number
): Promise<AxiosResponse<{ id: number }>> => {
  return axios.delete<{ id: number }>(`${apiUrl}/api/province/${id}`);
};
