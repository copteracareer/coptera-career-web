import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Create a new province in the Coptera API
 *
 * @param data The data to create a new province
 * @returns A promise that resolves to an AxiosResponse containing the newly created province
 */
export const createProvince = async (data: {
  id: number;
  name: string;
  country: {
    id: number;
    name: string;
  };
}): Promise<
  AxiosResponse<{
    id: number;
    name: string;
    country: { id: number; name: string };
  }>
> => {
  return axios.post<{
    id: number;
    name: string;
    country: { id: number; name: string };
  }>(`${apiUrl}/api/province/1`, data);
};
