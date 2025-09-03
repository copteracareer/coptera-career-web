import axios, { AxiosResponse } from "axios";
import { ApiResponseDetail } from "@/model/job";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a city by id from the Coptera API
 *
 * @param id The city ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the city
 */
export const getCityById = async (
  id: number
): Promise<ApiResponseDetail<City>> => {
  const res = await axios.get(`${apiUrl}/api/city/${id}`);
  return res.data;
};

export interface City {
  id: number;
  name: string;
  province: {
    id: number;
    name: string;
  };
}
