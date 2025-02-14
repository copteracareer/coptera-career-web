import axios, { AxiosResponse } from "axios";
import { de } from "date-fns/locale";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Update a job type in the Coptera API
 *
 * @param id The job type ID to update
 * @param data The data to update the job type
 * @returns A promise that resolves to an AxiosResponse containing the updated job type
 */
const updateJobExperience = async (
  id: number,
  data: {
    name: string;
  }
): Promise<
  AxiosResponse<{ id: number; name: string; description: string }>
> => {
  return axios.put<{ id: number; name: string; description: string }>(
    `${apiUrl}/api/job-experience/${id}`,
    data
  );
};

export default updateJobExperience;
