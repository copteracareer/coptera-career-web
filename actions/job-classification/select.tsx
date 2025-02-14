import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a work type by id from the Coptera API
 *
 * @param id The work type ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the work type
 */
const getJobClassificationById = async (
  id: number
): Promise<AxiosResponse<JobClassification>> => {
  return axios.get<JobClassification>(`${apiUrl}/api/job-classification/${id}`);
};

export interface JobClassification {
  id: number;
  name: string;
}

export default getJobClassificationById;
