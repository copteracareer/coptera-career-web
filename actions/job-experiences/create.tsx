import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Create a new job type in the Coptera API
 *
 * @param data The data to create a new job type
 * @returns A promise that resolves to an AxiosResponse containing the newly created job type
 */
const createJobExperience = async (data: {
  name: string;
}): Promise<
  AxiosResponse<{ id: number; name: string; description: string }>
> => {
  return axios.post<{ id: number; name: string; description: string }>(
    `${apiUrl}/api/job-experience`,
    data
  );
};

export default createJobExperience;
