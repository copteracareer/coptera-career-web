import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Retrieve a list of all work types from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of work types
 */
export const getWorkTypes = async (): Promise<AxiosResponse<WorkType[]>> => {
  return axios.get<WorkType[]>(`${apiUrl}/api/job-facility`);
};

export interface WorkType {
  id: number;
  name: string;
  image: string;
}
