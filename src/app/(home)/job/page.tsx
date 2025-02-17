"use client";
import { useState, useEffect, useCallback } from "react";
import FilterSidebar from "./_components/filterSidebar";
import SearchBar from "./_components/searchBar";
import JobList from "./_components/jobList";
import { getJobVacancies } from "../../../../actions/job-vacancy";
import { JobVacancy } from "@/model/job";

export default function Home() {
  const [filteredJobs, setFilteredJobs] = useState<JobVacancy[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Ambil data pekerjaan
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobs = await getJobVacancies();

        if (Array.isArray(jobs)) {
          const formattedJobs: JobVacancy[] = jobs.map((job) => ({
            id: job.id,
            title: job.title,
            company: job.company
              ? job.company
              : { id: 0, name: "Unknown Company" },
            city: job.city ? job.city : { id: 0, name: "Unknown Location" },
            work_type: job.work_type || "Unknown",
            due_date: job.due_date ? new Date(job.due_date) : null,
            description: job.description || "No description available",
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
            type: job.type || "Unknown",
            requirement: job.requirement || "No requirement specified",
            experience: job.experience || "No experience specified",
          }));

          console.log("Data pekerjaan:", formattedJobs);
          setFilteredJobs(formattedJobs);
        } else {
          console.error("Data yang diterima bukan array:", jobs);
        }
      } catch (error) {
        console.error("Gagal mengambil data pekerjaan:", error);
      }
    };

    fetchJobs();
  }, []);

  // Menangani perubahan filter
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

  // Menangani pencarian pekerjaan
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
