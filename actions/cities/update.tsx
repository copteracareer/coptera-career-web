import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Create a new city in the Coptera API
 *
 * @param data The data to create a new city
 * @returns A promise that resolves to an AxiosResponse containing the newly created city
 */
export const updateCity = async (data: {
  id: number;
  name: string;
  province: {
    id: number;
    name: string;
  };
}): Promise<
  AxiosResponse<{
    id: number;
    name: string;
    province: { id: number; name: string };
  }>
> => {
  return axios.put<{
    id: number;
    name: string;
    province: { id: number; name: string };
  }>(`${apiUrl}/api/city/1`, data);
};
