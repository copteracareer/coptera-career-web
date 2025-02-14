import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Create a new job vacancy in the Coptera API
 *
 * @param data The data to create a new job vacancy
 * @returns A promise that resolves to an AxiosResponse containing the newly created job vacancy
 */
const createJobVacancy = async (
  data: object
): Promise<AxiosResponse<object>> => {
  return axios.post<object>(`${apiUrl}/api/job-vacancy`, data);
};

export default createJobVacancy;
