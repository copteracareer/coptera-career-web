export interface Job {
  id: number;
  work_type: string;
  title: string;
  due_date: Date | null;
  description: string;
  link: string;
  is_closed: boolean;
  company: Company;
  city: City;
  jobVacancyFacilities: JobVacancyFacility[];
  jobVacancySalary: JobVacancySalary | null;
  category: string;
  type: string;
  requirement: string;
}

export interface JobVacancy {
  id: number;
  work_type: string;
  title: string;
  due_date: Date | null;
  description: string;
  link: string;
  is_closed: boolean;
  company: Company;
  city: City;
  jobVacancyFacilities: JobFacility[];
  jobVacancySalary: JobVacancySalary | null;
  category?: string;
  type?: string;
  requirement?: string;
  experience?: string;
}

export interface Company {
  id: number;
  name: string;
  brand?: string;
  description?: string;
  address?: string;
  image?: string;
  web?: string;
  company_size?: string;
  is_verified?: boolean;
  is_partner?: boolean;
}

export interface City {
  id: number;
  name: string;
  province?: Province;
}

export interface Province {
  id: number;
  name: string;
}

export interface JobFacility {
  id: number;
  name: string;
  image?: string;
}

export interface JobVacancyFacility {
  id: number;
  jobFacility: JobFacility;
}

export interface JobVacancySalary {
  minimum: number;
  maximum: number;
  frequency: string;
  currency: string;
}
