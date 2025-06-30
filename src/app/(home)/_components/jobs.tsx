"use client";
import { useEffect, useState } from "react";
import JobCard from "../job/_components/jobCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JobVacancy } from "@/model/job";
import { getJobVacancies } from "../../../../actions/job-vacancy";

export default function Jobs() {
  const [jobs, setJobs] = useState<JobVacancy[]>([]);

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
            experience: job.experience || "No experience specified",
          }));

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

  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:py-24 lg:px-20 sm:px-6 md:px-12 relative z-50">
      <div className="mt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-[24px] md:text-[32px] font-bold">
              Lowongan Pekerjaan{" "}
              <span className="text-yellow-400">Terbaru</span>
            </h1>
            <p className="text-[14px] text-gray-400 md:w-3/4 lg:w-1/2 text-justify mt-3">
              Jelajahi perjalanan karier Anda dengan mudah. Temukan peluang
              pekerjaan yang dikategorikan sesuai dengan keahlian dan minat
              Anda.
            </p>
          </div>
          <Link href="/job">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 md:px-6">
              Lihat Lainnya
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
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
                brand: job.company ? job.company.brand : "",
                requirement: job.requirement || "No requirement specified",
                work_type: job.work_type || "Unknown",
                company_email: job.company?.email,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
