export async function getOptions<T = { id: number; name: string }>(
  endpoint: string,
  params?: Record<string, string | number | boolean | undefined>
): Promise<T[]> {
  const API_BASE = "https://api.career.coptera.id/api";
  const query = params
    ? "?" +
      Object.entries(params)
        .filter(([_, v]) => v !== undefined && v !== null)
        .map(
          ([k, v]) =>
            `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`
        )
        .join("&")
    : "";
  const res = await fetch(`${API_BASE}/${endpoint}${query}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  const json = await res.json();
  if (!json.status) {
    throw new Error(json.message);
  }
  return json.data.data as T[];
}

export async function createOption(
  endpoint: string,
  data: Record<string, unknown>
) {
  const API_BASE = "https://api.career.coptera.id/api";

  if (data.name === null || data.name === undefined) {
    throw new Error("Name is required");
  }

  const formattedData = {
    name:
      typeof data.name === "object"
        ? (data.name as { name: string }).name
        : (data.name as string),
  };

  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedData),
  });

  if (!res.ok) {
    throw new Error(`Failed to create ${endpoint}`);
  }

  const json = await res.json();
  if (!json.status) {
    throw new Error(json.message);
  }

  return json.data;
}

interface Testimonial {
  id: number;
  name: string;
  image?: string;
  position: string;
  description: string;
}

export function getJobExperiences() {
  return getOptions("job-experience");
}

export function getJobClassifications() {
  return getOptions("job-classification");
}

export function getJobTypes() {
  return getOptions("job-type");
}

export function getEducationLevels() {
  return getOptions("education-level");
}

export function getCompanies() {
  return getOptions("company");
}

export function getJobFacilities() {
  return getOptions("job-facility");
}

export function getCompanyTypes() {
  return getOptions("company-type");
}

export function getPartners(order = "DESC") {
  return getOptions("partner", { order });
}

export function getTestimonials(order = "DESC", limit = 4) {
  return getOptions<Testimonial>("testimonial", { order, limit, is_show: 1 });
}

// CREATE
export function createJobExperiences(name: string) {
  return createOption("job-experience", { name });
}

export function createJobClassifications(name: string) {
  return createOption("job-classification", { name });
}

export function createJobTypes(name: string) {
  return createOption("job-type", { name });
}

export function createEducationLevels(name: string) {
  return createOption("education-level", { name });
}

export function createJobFacilities(name: string) {
  return createOption("job-facility", { name });
}

export function createCompanyTypes(name: string) {
  return createOption("company-type", { name });
}
