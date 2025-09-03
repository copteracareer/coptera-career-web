"use client";
import { useEffect, useState } from "react";
import JobCard from "../job/_components/jobCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JobVacancy, JobClassification } from "@/model/job";
import { getJobVacancies } from "../../../../actions/job-vacancy";
import { timeAgo } from "@/utils/helper";
import { getJobClassifications } from "../../../../actions/options";

export default function Jobs() {
  const [jobs, setJobs] = useState<JobVacancy[]>([]);
  const [jobClassifications, setJobClassifications] = useState<
    JobClassification[]
  >([]);
  const [filterClassification, setFilterClassification] = useState<
    number | null
  >(null);

  const fetchJobs = async (classificationId?: number | null) => {
    try {
      const filters = classificationId
        ? { job_classification_id: [classificationId] }
        : undefined;

      const jobs = await getJobVacancies(filters);

      if (Array.isArray(jobs)) {
        const formattedJobs: JobVacancy[] = jobs.map((job) => ({
          id: job.id,
          title: job.title,
          company: job.company
            ? job.company
            : { id: 0, name: "Unknown Company" },
          city: job.city ? job.city : { id: 0, name: "Indonesia" },
          work_type: job.jobType ? job.jobType.name || "Unknown" : "Unknown",
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
          type: job.jobClassification
            ? job.jobClassification.name || "Unknown"
            : "Unknown",
          requirement: job.requirement || "No requirement specified",
          experience: job.jobExperience
            ? job.jobExperience.name || "No experience specified"
            : "No experience specified",
          created_at: new Date(job.created_at),
        }));

        setJobs(formattedJobs);
      } else {
        console.error("Data yang diterima bukan array:", jobs);
      }
    } catch (error) {
      console.error("Gagal mengambil data pekerjaan:", error);
    }
  };

  useEffect(() => {
    const fetchJobClassifications = async () => {
      try {
        const jobClassifications = await getJobClassifications();

        if (Array.isArray(jobClassifications)) {
          setJobClassifications(jobClassifications);
        }
      } catch (error) {}
    };

    fetchJobs();
    fetchJobClassifications();
  }, []);

  const handleClassificationClick = (classificationId: number | null) => {
    setFilterClassification(classificationId);
    fetchJobs(classificationId);
  };

  return (
    <section className="bg-white px-6 pb-12 md:py-16 lg:pb-24 lg:px-20 sm:px-6 md:pb-12 relative z-50">
      <div className="mt-10">
        {/* Header */}
        {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div> */}
        <div className="flex flex-nowrap overflow-x-auto space-x-3 md:space-x-6 mb-[50px] md:mb-[100px]">
          <button
            onClick={() => handleClassificationClick(null)}
            className={`flex shrink-0 rounded-lg p-[10px] gap-2.5 text-base ${
              filterClassification === null
                ? "bg-[#155DFC] text-white font-semibold"
                : "border border-white text-[#404040] font-medium"
            }`}
          >
            Semua Pekerjaan
          </button>
          {/* Job Classifications */}
          {jobClassifications.map((classification) => (
            <button
              key={classification.id}
              onClick={() => handleClassificationClick(classification.id)}
              className={`flex shrink-0 rounded-lg p-[10px] gap-2.5 text-base ${
                filterClassification === classification.id
                  ? "bg-[#155DFC] text-white font-semibold"
                  : "border border-white text-[#404040] font-medium"
              }`}
            >
              {classification.name}
            </button>
          ))}
        </div>
        <h1 className="text-[24px] md:text-[32px] font-semibold text-black mb-6 md:mb-8 lg:mb-10">
          List Lowongan Kerja Terbaru
        </h1>
        {/* <p className="text-[14px] text-gray-400 md:w-3/4 lg:w-1/2 text-justify mt-3">
              Jelajahi perjalanan karier Anda dengan mudah. Temukan peluang
              pekerjaan yang dikategorikan sesuai dengan keahlian dan minat
              Anda.
            </p> */}
        {/* </div> */}
        {/* <Link href="/job">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 md:px-6">
              Lihat Lainnya
            </Button>
          </Link> */}
        {/* </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {jobs.slice(0, 9).map((job, index) => (
            <JobCard
              key={index}
              job={{
                id: job.id,
                title: job.title,
                company: job.company ? job.company.name : "Unknown Company",
                company_description: job.company
                  ? job.company.description
                  : "No description available",
                company_image: job.company ? job.company.image : "",
                location: job.city ? job.city.name : "Indonesia",
                type: job.type || "Unknown Type",
                experience: job.experience || "No experience specified",
                description: job.description || "No description available",
                link: job.link || "#",
                salary:
                  job.jobVacancySalary &&
                  job.jobVacancySalary.minimum !== undefined
                    ? `${job.jobVacancySalary.minimum.toLocaleString()} - ${
                        job.jobVacancySalary.maximum?.toLocaleString() || "-"
                      } ${job.jobVacancySalary.currency || "-"}`
                    : "Not specified",
                company_address: job.company ? job.company.address : "",
                is_company_verified: job.company ? job.company.is_verified : 0,
                brand: job.company ? job.company.brand : "",
                requirement: job.requirement || "No requirement specified",
                work_type: job.work_type || "Unknown",
                company_email: job.company?.email,
                posting_date: timeAgo(new Date(job.created_at)),
              }}
            />
          ))}
        </div>

        <div className="flex mx-auto">
          <Link
            href="/job"
            className="mx-auto flex flex-row items-center space-x-2 mt-[26px] md:mt-[34px]"
          >
            <p className="font-semibold text-[#1976D2] text-[32px]">
              Lihat Semua Lowongan
            </p>
            <img
              src="/img/icon/i-arrow-right-blue.png"
              alt="icon arrow right"
              className="h-[34px] w-[34px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
