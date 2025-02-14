import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.COPTERA_API as string;

/**
 * Update a job type in the Coptera API
 *
 * @param id The job type ID to update
 * @param data The data to update the job type
 * @returns A promise that resolves to an AxiosResponse containing the updated job type
 */
export const updateJobType = async (
  id: number,
  data: {
    name: string;
  }
): Promise<AxiosResponse<{ id: number; name: string }>> => {
  return axios.put<{ id: number; name: string }>(
    `${apiUrl}/api/work-type/${id}`,
    data
  );
};
