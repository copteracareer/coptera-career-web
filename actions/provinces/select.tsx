import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Retrieve a province by id from the Coptera API
 *
 * @param id The province ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the province
 */
export const getProvinceById = async (
  id: number
): Promise<AxiosResponse<Province>> => {
  return axios.get<Province>(`${apiUrl}/api/province/${id}`);
};

export interface Province {
  id: number;
  name: string;
  country: {
    id: number;
    name: string;
  };
}
