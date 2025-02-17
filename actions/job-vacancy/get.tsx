import axios from "axios";
import { JobVacancy } from "@/model/job";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Mengambil daftar pekerjaan dari API Coptera
 */
const getJobVacancies = async (): Promise<JobVacancy[]> => {
  const response = await axios.get(`${apiUrl}/api/job-vacancy`);
  return response?.data?.data?.data || [];
};

export default getJobVacancies;
