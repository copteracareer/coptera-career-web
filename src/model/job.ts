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
  id: number;
  salary: number;
  currency: string;
}