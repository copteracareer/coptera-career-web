import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a list of all work types from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of work types
 */
const getEducationLevels = async (): Promise<AxiosResponse<WorkType[]>> => {
  return axios.get<WorkType[]>(`${apiUrl}/api/education-level`);
};

export interface WorkType {
  id: number;
  name: string;
}

export default getEducationLevels;
