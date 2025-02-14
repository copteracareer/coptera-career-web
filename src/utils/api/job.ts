import { withHandling } from "./api";

const endpoint = "https://666a63547013419182cf164e.mockapi.io/api/v1";

const jobApi = {
  jobs: withHandling(async () => {
    const res = await fetch(`${endpoint}/jobs`);
    const jobs = await res.json();
    return jobs;
  }),
  job: withHandling(async (id: string) => {
    const url = `${endpoint}/jobs/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch job with id ${id}`);
    }
    return response.json();
  }),
  jobDelete: withHandling(async (id: string) => {
    const url = `${endpoint}/jobs/${id}`;
    const response = await fetch(url, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Failed to fetch job with id ${id}`);
    }
    return response.json();
  }),
  jobUpdate: withHandling(async (id: string, data: any) => {
    const url = `${endpoint}/jobs/${id}`;
    const response = await fetch(url, { method: "PUT", body: data });
    if (!response.ok) {
      throw new Error(`Failed to fetch job with id ${id}`);
    }
    return response.json();
  }),
};

export default jobApi;
