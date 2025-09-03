import axios, { AxiosResponse } from "axios";
import { City, ApiResponse } from "@/model/job";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a list of all cities from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of cities
 */
export const getCities = async (params?: {
  limit?: number;
  name?: string;
}): Promise<ApiResponse<City[]>> => {
  const queryParams = {
    ...params,
  };
  const res = await axios.get(`${apiUrl}/api/city`, {
    params: queryParams,
  });
  return res.data;
};
