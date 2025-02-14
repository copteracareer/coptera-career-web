import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Retrieve a list of all work types from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of work types
 */
export const getProvinces = async (): Promise<AxiosResponse<Province[]>> => {
  return axios.get<Province[]>(`${apiUrl}/api/province/1`);
};

export interface Province {
  id: number;
  name: string;
  country: {
    id: number;
    name: string;
  };
}
