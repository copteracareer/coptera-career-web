import { withHandling } from "./api";

const endpoint = "https://666bf80d49dbc5d7145c02ae.mockapi.io/api/v1";

const courseApi = {
  courses: withHandling(async () => {
    const res = await fetch(`${endpoint}/courses`);
    const jobs = await res.json();
    return jobs;
  }),
  course: withHandling(async (id: string) => {
    const url = `${endpoint}/courses/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch course with id ${id}`);
    }
    return response.json();
  }),
  courseDelete: withHandling(async (id: string) => {
    const url = `${endpoint}/courses/${id}`;
    const response = await fetch(url, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Failed to fetch course with id ${id}`);
    }
    return response.json();
  }),
  courseUpdate: withHandling(async (id: string, data: any) => {
    const url = `${endpoint}/courses/${id}`;
    const response = await fetch(url, { method: "PUT", body: data });
    if (!response.ok) {
      throw new Error(`Failed to fetch course with id ${id}`);
    }
    return response.json();
  }),
};

export default courseApi;
