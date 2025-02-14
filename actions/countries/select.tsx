import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Retrieve a country by id from the Coptera API
 *
 * @param id The country ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the country
 */
export const getCountryById = async (
  id: number
): Promise<AxiosResponse<Country>> => {
  return axios.get<Country>(`${apiUrl}/api/country/${id}`);
};

export interface Country {
  id: number;
  name: string;
  calling_code: number;
  currency: string;
}
