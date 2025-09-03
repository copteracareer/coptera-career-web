import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

/**
 * Retrieve a job vacancy by id from the Coptera API
 *
 * @param id The job vacancy ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the job vacancy
 */
export const getJobVacancyById = async (id: number): Promise<JobVacancy> => {
  const response = await axios.get<ApiResponse<JobVacancy>>(
    `${apiUrl}/api/job-vacancy/${id}`
  );

  return response.data.data;
};

export interface JobVacancy {
  id: number;
  work_type: string;
  title: string;
  due_date: string | null;
  description: string;
  link: string;
  is_closed: boolean;
  company_name: string;
  company_image: string;
  company: Company;
  city: City;
  jobType: JobType;
  jobVacancyFacilities: JobVacancyFacility[];
  jobVacancySalary: JobVacancySalary | null;
}

export interface Company {
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
  companyType: CompanyType;
}

export interface City {
  id: number;
  name: string;
  province: Province;
}

export interface Province {
  id: number;
  name: string;
}

export interface JobVacancyFacility {
  id: number;
  jobFacility: JobFacility;
}

export interface JobFacility {
  id: number;
  name: string;
  image: string;
}

export interface JobVacancySalary {
  minimum: number;
  maximum: number;
  frequency: string;
  currency: string;
}

export interface JobType {
  id: number;
  name: string;
}

export interface CompanyType {
  id: number;
  name: string;
}
