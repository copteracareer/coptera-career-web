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
        // Mendapatkan data pekerjaan
        const jobs = await getJobVacancies();

        console.log("Response jobs:", jobs); // Debug: Cek response

        // Pastikan data yang diterima adalah array
        if (Array.isArray(jobs)) {
          // Memformat data sesuai dengan yang diperlukan
          const formattedJobs = jobs.map((job: JobVacancy) => ({
            id: job.id,
            title: job.title,
            company: job.company?.name || "Unknown Company",
            location: job.city?.name || "Unknown Location",
            type: job.work_type || "Unknown",
            experience: job.requirement || "Not specified",
            salary: job.jobVacancySalary?.salary || "Negotiable",
          }));

          // Set filteredJobs dengan data yang sudah diformat
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
