import axios from "axios";
import { Company } from "@/model/company";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

/**
 * Retrieve a list of all companies from the Coptera API
 *
 * @returns A promise that resolves to an AxiosResponse containing the list of companies
 */
const getCompanies = async (): Promise<Company[]> => {
  const response = await axios.get(`${apiUrl}/api/company`);
  console.log("response company", response);
  return response.data?.data?.data ?? [];
};

export default getCompanies;
