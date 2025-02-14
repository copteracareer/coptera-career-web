import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a list of all work types from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of work types
 */
const getJobClassification = async (): Promise<
  AxiosResponse<JobClassification[]>
> => {
  return axios.get<JobClassification[]>(`${apiUrl}/api/job-classification`);
};

export interface JobClassification {
  id: number;
  name: string;
}

export default getJobClassification;
