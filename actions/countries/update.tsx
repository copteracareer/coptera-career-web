import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Update a country in the Coptera API
 *
 * @param id The country ID to update
 * @param data The data to update the country
 * @returns A promise that resolves to an AxiosResponse containing the updated country
 */
export const updateCountry = async (
  id: number,
  data: {
    id: number;
    name: string;
    calling_code: number;
    currency: string;
  }
): Promise<
  AxiosResponse<{
    id: number;
    name: string;
    calling_code: number;
    currency: string;
  }>
> => {
  return axios.put<{
    id: number;
    name: string;
    calling_code: number;
    currency: string;
  }>(`${apiUrl}/api/country/${id}`, data);
};
