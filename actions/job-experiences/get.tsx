import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a list of all work types from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of work types
 */
const getJobExperience = async (): Promise<AxiosResponse<JobExperience[]>> => {
  return axios.get<JobExperience[]>(`${apiUrl}/api/job-experience`);
};

export interface JobExperience {
  id: number;
  name: string;
  description: string;
}

export default getJobExperience;
