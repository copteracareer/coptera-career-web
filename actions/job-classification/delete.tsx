import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Handle delete data from path api/job-classification/:id
 *
 * @param id The work type ID to delete
 * @returns A promise that resolves to an AxiosResponse containing the deleted data
 */
const deletJobClassification = async (
  id: number
): Promise<AxiosResponse<{ id: number }>> => {
  return axios.delete<{ id: number }>(`${apiUrl}/api/job-classification/${id}`);
};

export default deletJobClassification;
