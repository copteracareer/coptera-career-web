import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Update a job vacancy in the Coptera API
 *
 * @param id The job vacancy ID to update
 * @param data The data to update the job vacancy
 * @returns A promise that resolves to an AxiosResponse containing the updated job vacancy
 */
const updateJobVacancy = async (
  id: number,
  data: {
    work_type: "onsite" | "remote" | "hybrid";
    title: string;
    due_date: string | null;
    description: string;
    link: string;
    is_closed: boolean;
    company: {
      id: number;
      name: string;
      brand: string;
      description: string;
      address: string;
      image: string;
      web: string;
      company_size: string;
      is_verified: boolean;
      is_partner: boolean;
    };
    city: {
      id: number;
      name: string;
      province: {
        id: number;
        name: string;
      };
    };
    jobVacancyFacilities: Array<{
      id: number;
      jobFacility: { id: number; name: string; image: string };
    }>;
    jobVacancySalary: null;
  }
): Promise<
  AxiosResponse<{
    id: number;
    work_type: string;
    title: string;
    due_date: string | null;
    description: string;
    link: string;
    is_closed: boolean;
    company: {
      id: number;
      name: string;
      brand: string;
      description: string;
      address: string;
      image: string;
      web: string;
      company_size: string;
      is_verified: boolean;
      is_partner: boolean;
    };
    city: {
      id: number;
      name: string;
      province: {
        id: number;
        name: string;
      };
    };
    jobVacancyFacilities: Array<{
      id: number;
      jobFacility: { id: number; name: string; image: string };
    }>;
    jobVacancySalary: null;
  }>
> => {
  return axios.put<{
    id: number;
    work_type: string;
    title: string;
    due_date: string | null;
    description: string;
    link: string;
    is_closed: boolean;
    company: {
      id: number;
      name: string;
      brand: string;
      description: string;
      address: string;
      image: string;
      web: string;
      company_size: string;
      is_verified: boolean;
      is_partner: boolean;
    };
    city: {
      id: number;
      name: string;
      province: {
        id: number;
        name: string;
      };
    };
    jobVacancyFacilities: Array<{
      id: number;
      jobFacility: { id: number; name: string; image: string };
    }>;
    jobVacancySalary: null;
  }>(`${apiUrl}/api/job-vacancy/${id}`, data);
};

export default updateJobVacancy;
