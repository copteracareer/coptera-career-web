"use client";
import { useState, useEffect, useCallback } from "react";
import FilterSidebar from "./_components/filterSidebar";
import SearchBar from "./_components/searchBar";
import JobList from "./_components/jobList";
import { getJobVacancies } from "../../../../actions/job-vacancy";
import { JobVacancy } from "@/model/job";
import { Filter } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCityById } from "../../../../actions/cities/select";

export default function Home() {
  const router = useRouter();
  const [jobs, setJobs] = useState<JobVacancy[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobVacancy[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [searchJobTitle, setSearchJobTitle] = useState<string>("");
  const searchParams = useSearchParams();
  const paramJobTitle = searchParams.get("title") || "";
  const paramJobCity = searchParams.get("city") || "";
  const paramJobClassification = searchParams.get("classification") || "";
  const [activeFilters, setActiveFilters] = useState<any>({
    job_classification_id: paramJobClassification
      ? paramJobClassification.split(",").map(Number)
      : [],
    city_id: paramJobCity ? paramJobCity.split(",").map(Number) : [],
  });
  const [cityInfo, setCityInfo] = useState<{
    name: string;
    province: string;
  } | null>(null);

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
            experience: job.jobExperience
              ? job.jobExperience.name || "No experience specified"
              : "No experience specified",
            created_at: new Date(job.created_at),
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

  useEffect(() => {
    if (jobs.length > 0) {
      handleSearch(paramJobTitle);
    }
  }, [jobs, paramJobTitle]);

  useEffect(() => {
    const fetchCity = async () => {
      if (!paramJobCity) return setCityInfo(null);

      try {
        const cityId = Number(paramJobCity.split(",")[0]);
        const response = await getCityById(cityId);

        if (response.status && response.data) {
          setCityInfo({
            name: response.data.name,
            province: response.data.province ? response.data.province.name : "",
          });
        } else {
          setCityInfo(null);
        }
      } catch (error) {
        // console.error("Failed to fetch city info:", error);
        setCityInfo(null);
      }
    };

    fetchCity();
  }, [paramJobCity]);

  // Menangani perubahan filter
  const handleFilterChange = useCallback(async (newFilters: any) => {
    try {
      setActiveFilters(newFilters);

      const jobs = await getJobVacancies(newFilters);
      setJobs(jobs);
      setFilteredJobs(jobs);

      updateUrlParams(newFilters, searchJobTitle);
    } catch (error) {
      console.error("Gagal mengambil data dengan filter:", error);
    }
  }, []);

  // Menangani pencarian pekerjaan
  const handleSearch = (query: string) => {
    setSearchJobTitle(query);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);

    updateUrlParams(activeFilters, query);
  };

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
            initialClassificationIds={
              paramJobClassification
                ? paramJobClassification.split(",").map(Number)
                : []
            }
            initialCityIds={
              paramJobCity ? paramJobCity.split(",").map(Number) : []
            }
          />
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
                initialClassificationIds={
                  paramJobClassification
                    ? paramJobClassification.split(",").map(Number)
                    : []
                }
                initialCityIds={
                  paramJobCity ? paramJobCity.split(",").map(Number) : []
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
