import { withHandling } from "./api";

const endpoint = "https://666bf80d49dbc5d7145c02ae.mockapi.io/api/v1";

const userApi = {
  users: withHandling(async () => {
    const res = await fetch(`${endpoint}/users`);
    const jobs = await res.json();
    return jobs;
  }),
  user: withHandling(async (id: string) => {
    const url = `${endpoint}/users/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch user with id ${id}`);
    }
    return response.json();
  }),
  userDelete: withHandling(async (id: string) => {
    const url = `${endpoint}/users/${id}`;
    const response = await fetch(url, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Failed to fetch user with id ${id}`);
    }
    return response.json();
  }),
  userUpdate: withHandling(async (id: string, data: any) => {
    const url = `${endpoint}/users/${id}`;
    const response = await fetch(url, { method: "PUT", body: data });
    if (!response.ok) {
      throw new Error(`Failed to fetch user with id ${id}`);
    }
    return response.json();
  }),
};

export default userApi;
