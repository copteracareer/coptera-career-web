import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a company by id from the Coptera API
 *
 * @param id The company ID to retrieve
 * @returns A promise that resolves to an AxiosResponse containing the company
 */
const getCompanyById = async (id: number): Promise<AxiosResponse<Company>> => {
  return axios.get<Company>(`${apiUrl}/api/company/${id}`);
};

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
  user: {
    id: number;
    email: string;
    telephone: string;
    userLevel: {
      id: number;
      name: string;
    };
  };
  companyType: {
    id: number;
    name: string;
  };
  city: {
    id: number;
    name: string;
    province: {
      id: number;
      name: string;
    };
  };
}

export default getCompanyById;
