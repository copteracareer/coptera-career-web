// page.tsx
"use client";
import { useState, useCallback } from "react";
import FilterSidebar from "./_components/filterSidebar";
import SearchBar from "./_components/searchBar";
import JobList from "./_components/jobList";
import { jobData } from "./data/jobData";

export default function Home() {
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [searchQuery, setSearchQuery] = useState("");

  // Gunakan useCallback agar fungsi ini tidak berubah di setiap render
  const handleFilterChange = useCallback((newFilters: any) => {
    const filtered = jobData.filter(
      (job) =>
        (newFilters.jobType.length
          ? newFilters.jobType.includes(job.type)
          : true) &&
        (newFilters.experience
          ? job.experience === newFilters.experience
          : true) &&
        (!newFilters.remote || job.isRemote)
    );
    setFilteredJobs(filtered);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = jobData.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Kirim fungsi onFilterChange yang stabil */}
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="md:col-span-3">
          <SearchBar onSearch={handleSearch} />
          <JobList jobs={filteredJobs} />
        </div>
      </div>
    </div>
  );
}
