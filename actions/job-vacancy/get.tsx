import axios, { AxiosResponse } from "axios";
import { JobVacancy } from "@/model/job";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a list of all job vacancies from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of job vacancies
 */
const getJobVacancies = async (): Promise<AxiosResponse<JobVacancy[]>> => {
  return axios.get<JobVacancy[]>(`${apiUrl}/api/job-vacancy`);
};

export default getJobVacancies;
