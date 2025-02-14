import JobCard from "./jobCard";

interface JobListProps {
  jobs: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    experience: string;
    salary: string;
  }[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
