import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Retrieve a work type by id from the Coptera API
 *
 * @param id The work type ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the work type
 */
export const getWorkTypeById = async (
  id: number
): Promise<AxiosResponse<WorkType>> => {
  return axios.get<WorkType>(`${apiUrl}/api/job-facility/${id}`);
};

export interface WorkType {
  id: number;
  name: string;
  image: string;
}
