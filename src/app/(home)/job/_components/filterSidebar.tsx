"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect, useCallback } from "react";

interface Filters {
  priority: string;
  jobType: string[];
  subdistrict: string[];
  experience: string;
  remote: boolean;
}

export default function FilterSidebar({
  onFilterChange,
}: {
  onFilterChange: (filters: Filters) => void;
}) {
  const [filters, setFilters] = useState<Filters>({
    priority: "More Relevant",
    jobType: [],
    subdistrict: [],
    experience: "",
    remote: false,
  });

  const jobTypes = [
    "Full Time",
    "Contract",
    "Internship",
    "Part Time",
    "Daily",
  ];
  const subdistricts = [
    "Cengkareng",
    "Cilandak",
    "Gambir",
    "Kebon Jeruk",
    "Kelapa Gading",
  ];
  const experiences = [
    "Less than 1 Years",
    "1-3 Years",
    "3-5 Years",
    "5-10 Years",
    "> 10 Years",
  ];

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

  const handleCheckboxChange = (name: keyof Filters, value: string) => {
    setFilters((prev) => {
      if (Array.isArray(prev[name])) {
        const newValue = prev[name].includes(value)
          ? prev[name].filter((item) => item !== value)
          : [...prev[name], value];

        // ⛔ Hindari update jika tidak ada perubahan
        if (JSON.stringify(newValue) === JSON.stringify(prev[name]))
          return prev;

        return { ...prev, [name]: newValue };
      }
      return prev;
    });
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => {
      if (prev.experience === e.target.value) return prev;
      return { ...prev, experience: e.target.value };
    });
  };

  const handleRemoteToggle = () => {
    setFilters((prev) => ({ ...prev, remote: !prev.remote }));
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
      jobType: [],
      subdistrict: [],
      experience: "",
      remote: false,
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
        <div className="mb-4">
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
        </div>

        {/* Job Type Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Job Type</h3>
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center mb-1">
              <Checkbox
                id={type}
                checked={filters.jobType.includes(type)}
                onCheckedChange={() => handleCheckboxChange("jobType", type)}
              />
              <span className="ml-2">{type}</span>
            </label>
          ))}
        </div>

        {/* Subdistrict Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Subdistrict</h3>
          {subdistricts.map((area) => (
            <label key={area} className="flex items-center mb-1">
              <Checkbox
                id={area}
                checked={filters.subdistrict.includes(area)}
                onCheckedChange={() =>
                  handleCheckboxChange("subdistrict", area)
                }
              />
              <span className="ml-2">{area}</span>
            </label>
          ))}
        </div>

        {/* Experience Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Experience</h3>
          <select
            name="experience"
            value={filters.experience}
            onChange={handleExperienceChange}
            className="w-full border rounded p-2"
          >
            <option value="">Select Experience</option>
            {experiences.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>

        {/* Remote Work Toggle */}
        <div className="flex items-center justify-between">
          <span className="font-medium">Remote Work</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.remote}
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
