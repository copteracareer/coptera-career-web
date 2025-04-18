import { JobVacancy } from "@/model/job";
import JobCard from "./jobCard";
import { link } from "fs";

interface JobListProps {
  jobs: JobVacancy[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={{
            id: job.id,
            title: job.title.charAt(0).toUpperCase() + job.title.slice(1),
            company: job.company ? job.company.name : "Unknown Company",
            company_description: job.description || "No description available",
            company_image: job.company ? job.company.image : "",
            location: job.city ? job.city.name : "Indonesia",
            type: job.type || "Unknown Type",
            experience: job.experience || "No experience specified",
            description: job.description || "No description available",
            link: job.link || "#",
            salary:
              job.jobVacancySalary && job.jobVacancySalary.minimum !== undefined
                ? `${job.jobVacancySalary.minimum.toLocaleString()} - ${
                    job.jobVacancySalary.maximum?.toLocaleString() || "-"
                  } ${job.jobVacancySalary.currency || "-"}`
                : "Not specified",
          }}
        />
      ))}
    </div>
  );
}
