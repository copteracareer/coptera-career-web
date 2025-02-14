import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a work type by id from the Coptera API
 *
 * @param id The work type ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the work type
 */
const getEducationLevelById = async (
  id: number
): Promise<AxiosResponse<EducationLevel>> => {
  return axios.get<EducationLevel>(`${apiUrl}/api/education-level/${id}`);
};

export interface EducationLevel {
  id: number;
  name: string;
}

export default getEducationLevelById;
