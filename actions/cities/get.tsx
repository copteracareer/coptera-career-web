import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Retrieve a list of all cities from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of cities
 */
export const getCities = async (): Promise<AxiosResponse<City[]>> => {
  return axios.get<City[]>(`${apiUrl}/api/city/1`);
};

export interface City {
  id: number;
  name: string;
  province: {
    id: number;
    name: string;
  };
}
