"use client";
import { useState, useCallback, useEffect } from "react";
import FilterSidebar from "./_components/filterSidebar";
import SearchBar from "./_components/searchBar";
import JobList from "./_components/jobList";
import { getJobVacancies } from "../../../../actions/job-vacancy";
import { JobVacancy } from "@/model/job";

export default function Home() {
  const [filteredJobs, setFilteredJobs] = useState<JobVacancy[]>([]);
  const [setSearchQuery] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobVacancies();
        const jobs = response?.data?.data?.data || [];

        // Pastikan data sesuai dengan struktur yang diharapkan
        const formattedJobs = jobs.map((job: any) => ({
          id: job.id,
          title: job.title,
          company: job.company?.name || "Unknown Company",
          location: job.city?.name || "Unknown Location",
          type: job.work_type || "Unknown",
          experience: job.requirement || "Not specified",
          salary: job.jobVacancySalary?.amount || "Negotiable",
        }));

        setFilteredJobs(formattedJobs);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleFilterChange = useCallback(
    (newFilters: any) => {
      const filtered = filteredJobs.filter(
        (job) =>
          (newFilters.jobType.length
            ? newFilters.jobType.includes(job.type)
            : true) &&
          (newFilters.experience
            ? job.experience === newFilters.experience
            : true)
      );
      setFilteredJobs(filtered);
    },
    [filteredJobs]
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = filteredJobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="md:col-span-3">
          <SearchBar onSearch={handleSearch} />
          <JobList jobs={filteredJobs} />
        </div>
      </div>
    </div>
  );
}
