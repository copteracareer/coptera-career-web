import axios, { AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Update a company in the Coptera API
 *
 * @param id The company ID to update
 * @param data The data to update the company
 * @returns A promise that resolves to an AxiosResponse containing the updated company
 */
const updateCompany = async (
  id: number,
  data: {
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
): Promise<
  AxiosResponse<{
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
  }>
> => {
  return axios.put<{
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
  }>(`${apiUrl}/api/company/${id}`, data);
};

export default updateCompany;
