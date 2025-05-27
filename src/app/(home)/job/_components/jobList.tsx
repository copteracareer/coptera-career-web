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
            company_description: job.company
              ? job.company.description
              : "No description available",
            company_image: job.company ? job.company.image : "",
            location: job.city ? job.city.name : "Indonesia",
            type: job.jobClassification
              ? job.jobClassification.name || "Unknown"
              : "Unknown",
            experience: job.experience || "No experience specified",
            description: job.description || "No description available",
            link: job.link || "#",
            salary:
              job.jobVacancySalary && job.jobVacancySalary.minimum !== undefined
                ? `${job.jobVacancySalary.minimum.toLocaleString()} - ${
                    job.jobVacancySalary.maximum?.toLocaleString() || "-"
                  } ${job.jobVacancySalary.currency || "-"}`
                : "Not specified",
            company_address: job.company ? job.company.address : "",
            brand: job.company ? job.company.brand : "",
            requirement: job.requirement || "No requirement specified",
            work_type: job.jobType ? job.jobType.name || "Unknown" : "Unknown",
          }}
        />
      ))}
    </div>
  );
}
