import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Create a new job type in the Coptera API
 *
 * @param data The data to create a new job type
 * @returns A promise that resolves to an AxiosResponse containing the newly created job type
 */
export const createJobType = async (data: {
  name: string;
}): Promise<AxiosResponse<{ id: number; name: string }>> => {
  return axios.post<{ id: number; name: string }>(`${apiUrl}/api/skill`, data);
};
