import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Retrieve a city by id from the Coptera API
 *
 * @param id The city ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the city
 */
export const getCityById = async (id: number): Promise<AxiosResponse<City>> => {
  return axios.get<City>(`${apiUrl}/api/city/${id}`);
};

export interface City {
  id: number;
  name: string;
  province: {
    id: number;
    name: string;
  };
}
