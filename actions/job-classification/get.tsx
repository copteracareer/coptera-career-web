import axios from "axios";
import { JobClassification } from "@/model/job";
const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a list of all work types from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of work types
 */
const getJobClassification = async (): Promise<JobClassification[]> => {
  const response = await axios.get(`${apiUrl}/api/job-classification`);

  return response.data?.data?.data ?? [];
};

export default getJobClassification;
