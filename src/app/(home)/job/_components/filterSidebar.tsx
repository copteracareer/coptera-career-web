"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect, useCallback } from "react";
import {
  getJobExperiences,
  getJobClassifications,
  getJobTypes,
  getEducationLevels,
  getJobFacilities,
} from "../../../../../actions/options";

interface Filters {
  priority: string;
  job_type_id: number[];
  job_experience_id: number[];
  job_facility_id: number[];
  job_classification_id: number[];
  education_level_id: number[];
  work_type: boolean;
  city_id: number[];
}
import { useQuery } from "@tanstack/react-query";

export default function FilterSidebar({
  onFilterChange,
  initialClassificationIds = [],
  initialCityIds = [],
}: {
  onFilterChange: (filters: Filters) => void;
  initialClassificationIds?: number[];
  initialCityIds?: number[];
}) {
  const [filters, setFilters] = useState<Filters>({
    priority: "More Relevant",
    job_type_id: [],
    job_experience_id: [],
    job_facility_id: [],
    job_classification_id: initialClassificationIds,
    education_level_id: [],
    work_type: false,
    city_id: initialCityIds,
  });

  const { data: jobFacilities = [] } = useQuery({
    queryKey: ["jobFacilities"],
    queryFn: getJobFacilities,
  });
  const { data: experiences = [] } = useQuery({
    queryKey: ["jobExperiences"],
    queryFn: getJobExperiences,
  });
  const { data: classifications = [] } = useQuery({
    queryKey: ["jobClassifications"],
    queryFn: getJobClassifications,
  });
  const { data: jobTypes = [] } = useQuery({
    queryKey: ["jobTypes"],
    queryFn: getJobTypes,
  });
  const { data: educationLevels = [] } = useQuery({
    queryKey: ["educationLevels"],
    queryFn: getEducationLevels,
  });

  // 🚀 Optimasi: Gunakan `useCallback` untuk mencegah fungsi berubah setiap render
  const debouncedFilterChange = useCallback(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  // 🌟 Gunakan Debounce untuk Mencegah Infinite Loop
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedFilterChange();
    }, 300); // ⏳ Delay 300ms agar tidak memicu terlalu sering
    return () => clearTimeout(timer);
  }, [filters, debouncedFilterChange]);

  const handleCheckboxChange = (name: keyof Filters, value: number) => {
    setFilters((prev) => {
      if (Array.isArray(prev[name])) {
        const newValue = prev[name].includes(value)
          ? prev[name].filter((item) => item !== value)
          : [...prev[name], value];

        if (JSON.stringify(newValue) === JSON.stringify(prev[name]))
          return prev;

        return { ...prev, [name]: newValue };
      }
      return prev;
    });

    console.log("berubah filter", filters);
  };

  // const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFilters((prev) => {
  //     if (prev.experience === e.target.value) return prev;
  //     return { ...prev, experience: e.target.value };
  //   });
  // };

  const handleRemoteToggle = () => {
    setFilters((prev) => ({ ...prev, work_type: !prev.work_type }));
  };

  const handlePriorityChange = (priority: string) => {
    setFilters((prev) => {
      if (prev.priority === priority) return prev;
      return { ...prev, priority };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      priority: "More Relevant",
      job_type_id: [],
      job_experience_id: [],
      job_facility_id: [],
      job_classification_id: [],
      education_level_id: [],
      work_type: false,
      city_id: [],
    });
  };

  return (
    <div className="bg-white">
      <div className="p-4 border rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Filter</h2>
          <button onClick={clearAllFilters} className="text-red-500 text-sm">
            Hapus Filter
          </button>
        </div>

        {/* Priority Filter */}
        {/* <div className="mb-4">
          <h3 className="font-medium mb-2">Prioritaskan</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => handlePriorityChange("More Relevant")}
              className={`px-3 py-1 rounded ${
                filters.priority === "More Relevant"
                  ? "bg-gray-300"
                  : "bg-gray-100"
              }`}
            >
              More Relevant
            </button>
            <button
              onClick={() => handlePriorityChange("Just Added")}
              className={`px-3 py-1 rounded ${
                filters.priority === "Just Added"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Just Added
            </button>
          </div>
        </div> */}

        {/* Job Type Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Job Type</h3>
          {jobTypes.map((type) => (
            <label key={type.id} className="flex items-center mb-1">
              <Checkbox
                id={`job-type-${type.id.toString()}`}
                onCheckedChange={() =>
                  handleCheckboxChange("job_type_id", type.id)
                }
              />
              <span className="ml-2">{type.name}</span>
            </label>
          ))}
        </div>

        {/* Experience Filter */}
        {/* <div className="mb-4">
          <h3 className="font-medium mb-2">Experience</h3>
          <select
            name="experience"
            value={filters.experience}
            onChange={handleExperienceChange}
            className="w-full border rounded p-2"
          >
            <option value="">Select Experience</option>
            {experiences.map((exp) => (
              <option key={exp.id} value={exp.name}>
                {exp.name}
              </option>
            ))}
          </select>
        </div> */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Job Experiences</h3>
          {experiences.map((experience) => (
            <label key={experience.id} className="flex items-center mb-1">
              <Checkbox
                id={`job-experience-${experience.id.toString()}`}
                onCheckedChange={() =>
                  handleCheckboxChange("job_experience_id", experience.id)
                }
              />
              <span className="ml-2">{experience.name}</span>
            </label>
          ))}
        </div>

        {/* Job Type Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Job Facilities</h3>
          {jobFacilities.map((facilities) => (
            <label key={facilities.id} className="flex items-center mb-1">
              <Checkbox
                id={`job-facilities-${facilities.id.toString()}`}
                onCheckedChange={() =>
                  handleCheckboxChange("job_facility_id", facilities.id)
                }
              />
              <span className="ml-2">{facilities.name}</span>
            </label>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Job Classification</h3>
          {classifications.map((classification) => (
            <label key={classification.id} className="flex items-center mb-1">
              <Checkbox
                id={`job-classification-${classification.id.toString()}`}
                checked={filters.job_classification_id.includes(
                  classification.id
                )}
                onCheckedChange={() =>
                  handleCheckboxChange(
                    "job_classification_id",
                    classification.id
                  )
                }
              />
              <span className="ml-2">{classification.name}</span>
            </label>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Education Levels</h3>
          {educationLevels.map((education) => (
            <label key={education.id} className="flex items-center mb-1">
              <Checkbox
                id={`job-education-${education.id.toString()}`}
                onCheckedChange={() =>
                  handleCheckboxChange("education_level_id", education.id)
                }
              />
              <span className="ml-2">{education.name}</span>
            </label>
          ))}
        </div>

        {/* Remote Work Toggle */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Remote Work</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.work_type}
              onChange={handleRemoteToggle}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer-checked:bg-blue-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
