"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import FilterSidebar from "./_components/filterSidebar";
import SearchBar from "./_components/searchBar";
import JobList from "./_components/jobList";
import { getJobVacancies } from "../../../../actions/job-vacancy";
import { JobVacancy } from "@/model/job";
import { Filter } from "lucide-react";

export default function HomeContent({
  initialJobs,
  initialFilters,
  initialSearchTitle,
  initialCityInfo,
}: {
  initialJobs: JobVacancy[];
  initialFilters: any;
  initialSearchTitle: string;
  initialCityInfo: { name: string; province: string } | null;
}) {
  const router = useRouter();

  const [jobs, setJobs] = useState<JobVacancy[]>(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState<JobVacancy[]>(initialJobs);
  const [searchJobTitle, setSearchJobTitle] =
    useState<string>(initialSearchTitle);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState<any>(initialFilters);
  const [cityInfo, setCityInfo] = useState(initialCityInfo);

  // Handle filter changes
  const handleFilterChange = useCallback(
    async (newFilters: any) => {
      try {
        setActiveFilters(newFilters);

        const jobs = await getJobVacancies(newFilters);
        setJobs(jobs);
        setFilteredJobs(jobs);

        updateUrlParams(newFilters, searchJobTitle);
      } catch (error) {
        console.error("Gagal mengambil data dengan filter:", error);
      }
    },
    [searchJobTitle]
  );

  // Handle search
  const handleSearch = (query: string) => {
    setSearchJobTitle(query);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);

    updateUrlParams(activeFilters, query);
  };

  // Update URL params
  const updateUrlParams = (filters: any, title?: string) => {
    const params = new URLSearchParams();

    if (title) params.set("title", title);
    if (filters.job_classification_id?.length)
      params.set("classification", filters.job_classification_id.join(","));
    if (filters.city_id?.length) params.set("city", filters.city_id.join(","));

    router.push(`/job?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="container mx-auto p-4">
      {cityInfo && (
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-5">
          Job Vacancy in {cityInfo.name}
          {cityInfo.province ? ", " + cityInfo.province : ""}
        </h1>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Desktop Filter */}
        <div className="hidden md:block">
          <FilterSidebar
            onFilterChange={handleFilterChange}
            initialClassificationIds={initialFilters.job_classification_id}
            initialCityIds={initialFilters.city_id}
          />
        </div>

        {/* Job List + Search */}
        <div className="md:col-span-3">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowMobileFilter(true)}
              className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg md:hidden hover:bg-blue-700 transition"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          <SearchBar value={searchJobTitle} onSearch={handleSearch} />
          <JobList jobs={filteredJobs} />
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start p-4 overflow-auto">
          <div className="bg-white rounded-lg w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Filter</h2>
              <button
                onClick={() => setShowMobileFilter(false)}
                className="text-gray-600 hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <FilterSidebar
                onFilterChange={handleFilterChange}
                initialClassificationIds={initialFilters.job_classification_id}
                initialCityIds={initialFilters.city_id}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
