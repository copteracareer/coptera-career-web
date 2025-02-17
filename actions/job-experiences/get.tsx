import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

export interface JobExperience {
  id: number;
  name: string;
  description: string | null;
}

const getJobExperience = async (): Promise<JobExperience[]> => {
  const response = await axios.get(`${apiUrl}/api/job-experience`);

  console.log("response experience", response);

  return response.data?.data?.data ?? [];
};

export default getJobExperience;
