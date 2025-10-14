import { getJobVacancies } from "../../../../actions/job-vacancy";
import { getCityById } from "../../../../actions/cities/select";
import HomeContent from "./HomeContent";
import { JobVacancy } from "@/model/job";

// this runs on the server, so we can use searchParams directly
export default async function JobPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;

  const paramJobTitle = (searchParams.title as string) || "";
  const paramJobCity = (searchParams.city as string) || "";
  const paramJobClassification = (searchParams.classification as string) || "";

  // initial filters
  const filters: any = {
    job_classification_id: paramJobClassification
      ? paramJobClassification.split(",").map(Number)
      : [],
    city_id: paramJobCity ? paramJobCity.split(",").map(Number) : [],
  };

  // fetch initial jobs
  const jobs = await getJobVacancies(filters);

  // format jobs
  const formattedJobs: JobVacancy[] = jobs.map((job: any) => ({
    id: job.id,
    title: job.title,
    company: job.company ? job.company : { id: 0, name: "Unknown Company" },
    city: job.city ? job.city : { id: 0, name: "Unknown Location" },
    work_type: job.jobType ? job.jobType.name || "Unknown" : "Unknown",
    due_date: job.due_date ? new Date(job.due_date) : null,
    description: job.description || "No description available",
    is_send_email: job.is_send_email,
    link: job.link || "#",
    is_closed: job.is_closed,
    jobVacancyFacilities: [],
    jobVacancySalary: job.jobVacancySalary
      ? {
          minimum: job.jobVacancySalary.minimum,
          maximum: job.jobVacancySalary.maximum,
          frequency: job.jobVacancySalary.frequency,
          currency: job.jobVacancySalary.currency,
        }
      : null,
    category: job.category || "Unknown",
    type: job.jobClassification
      ? job.jobClassification.name || "Unknown"
      : "Unknown",
    requirement: job.requirement || "No requirement specified",
    experience: job.jobExperience
      ? job.jobExperience.name || "No experience specified"
      : "No experience specified",
    created_at: new Date(job.created_at),
  }));

  // fetch city info if needed
  let cityInfo: { name: string; province: string } | null = null;
  if (paramJobCity) {
    const cityId = Number(paramJobCity.split(",")[0]);
    const response = await getCityById(cityId);
    if (response.status && response.data) {
      cityInfo = {
        name: response.data.name,
        province: response.data.province ? response.data.province.name : "",
      };
    }
  }

  return (
    <HomeContent
      initialJobs={formattedJobs}
      initialFilters={filters}
      initialSearchTitle={paramJobTitle}
      initialCityInfo={cityInfo}
    />
  );
}
