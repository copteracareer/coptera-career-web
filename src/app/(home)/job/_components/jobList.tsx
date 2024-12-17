import JobCard from "./JobCard";

export default function JobList({ jobs }: { jobs: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}
