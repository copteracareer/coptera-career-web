import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Handle delete data from path api/work-type/:id
 *
 * @param id The work type ID to delete
 * @returns A promise that resolves to an AxiosResponse containing the deleted data
 */
const deleteEducationLevel = async (
  id: number
): Promise<AxiosResponse<{ id: number }>> => {
  return axios.delete<{ id: number }>(`${apiUrl}/api/education-level/${id}`);
};

export default deleteEducationLevel;
