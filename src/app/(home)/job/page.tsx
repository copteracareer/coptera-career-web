"use client";
import { useState, useEffect, useCallback } from "react";
import FilterSidebar from "./_components/filterSidebar";
import SearchBar from "./_components/searchBar";
import JobList from "./_components/jobList";
import { getJobVacancies } from "../../../../actions/job-vacancy";
import { JobVacancy } from "@/model/job";
import { Filter } from "lucide-react";

export default function Home() {
  const [jobs, setJobs] = useState<JobVacancy[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobVacancy[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

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
            type: job.jobType ? job.jobType.name || "Unknown" : "Unknown",
            requirement: job.requirement || "No requirement specified",
            experience: job.experience || "No experience specified",
          }));

          setFilteredJobs(formattedJobs);
          setJobs(formattedJobs);
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
  const handleFilterChange = useCallback(async (newFilters: any) => {
    try {
      const jobs = await getJobVacancies(newFilters);
      setJobs(jobs);
      setFilteredJobs(jobs);
    } catch (error) {
      console.error("Gagal mengambil data dengan filter:", error);
    }
  }, []);

  // Menangani pencarian pekerjaan
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
   <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Desktop Filter */}
        <div className="hidden md:block">
          <FilterSidebar onFilterChange={handleFilterChange} />
        </div>

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

          <SearchBar onSearch={handleSearch} />
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
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
