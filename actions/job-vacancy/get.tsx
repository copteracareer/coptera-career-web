import axios from "axios";
import { JobVacancy } from "@/model/job";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

type JobFilterParams = {
  job_type_id?: number[];
  job_experience_id?: number[];
  job_facility_id?: number[];
  job_classification_id?: number[];
  education_level_id?: number[];
  work_type?: string[];
  city_id?: number[];
  limit?: number;
};

/**
 * Mengambil daftar pekerjaan dari API Coptera
 */
const getJobVacancies = async (
  filters?: JobFilterParams
): Promise<JobVacancy[]> => {
  const params = new URLSearchParams();
  if (filters?.job_experience_id?.length) {
    params.set("job_experience_id", filters.job_experience_id.join(","));
  }
  if (filters?.job_classification_id?.length) {
    params.set(
      "job_classification_id",
      filters.job_classification_id.join(",")
    );
  }
  if (filters?.job_type_id?.length) {
    params.set("job_type_id", filters.job_type_id.join(","));
  }
  if (filters?.job_facility_id?.length) {
    params.set("job_facility_id", filters.job_facility_id.join(","));
  }
  if (filters?.education_level_id?.length) {
    params.set("education_level_id", filters.education_level_id.join(","));
  }
  if (filters?.work_type?.length) {
    params.set("work_type", filters.work_type.join(","));
  }
  if (filters?.city_id?.length) {
    params.set("city_id", filters.city_id.join(","));
  }
  if (filters?.limit) {
    params.set("limit", filters.limit.toString());
  }

  const response = await axios.get(
    `${apiUrl}/api/job-vacancy?${params.toString()}`
  );

  return response?.data?.data?.data || [];
};

export default getJobVacancies;
