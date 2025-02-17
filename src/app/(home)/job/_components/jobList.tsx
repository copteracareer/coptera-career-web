import { JobVacancy } from "@/model/job";
import JobCard from "./jobCard";

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
            title: job.title,
            company: job.company.name,
            location: job.city ? job.city.name : "Unknown Location",
            type: job.type || "Unknown Type",
            experience: job.experience || "No experience specified",
            salary:
              job.jobVacancySalary && job.jobVacancySalary.minimum
                ? `${job.jobVacancySalary.minimum.toLocaleString()} - ${job.jobVacancySalary.maximum.toLocaleString()} ${
                    job.jobVacancySalary.currency
                  }`
                : "Not specified",
          }}
        />
      ))}
    </div>
  );
}
