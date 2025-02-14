import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Retrieve a list of all countries from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of countries
 */
export const getWorkTypes = async (): Promise<AxiosResponse<Country[]>> => {
  return axios.get<Country[]>(`${apiUrl}/api/country`);
};

export interface Country {
  id: number;
  name: string;
  calling_code: number;
  currency: string;
}
