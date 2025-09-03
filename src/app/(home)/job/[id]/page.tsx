import Link from "next/link";
import { getJobVacancies } from "../../../../../actions/job-vacancy";
import { getJobVacancyById } from "../../../../../actions/job-vacancy/select";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { JobVacancy } from "@/model/job";
import JobCard from "../_components/jobCard";
import { timeAgo } from "@/utils/helper";

type JobDetailPageProps = {
  params: { id: string };
};

// ✅ Pre-generate some paths (like getStaticPaths)
export async function generateStaticParams() {
  const jobs = await getJobVacancies({ limit: 10 });
  return jobs.map((job) => ({
    id: job.id.toString(),
  }));
}

// ✅ ISR (revalidate every 60s)
export const revalidate = 60;

// ✅ The actual page
export default async function JobDetailPage({ params }: JobDetailPageProps) {
  try {
    const { id } = await params;

    const [job, anotherJobsRaw] = await Promise.all([
      getJobVacancyById(Number(id)),
      getJobVacancies({ limit: 10 }),
    ]);

    const anotherJobs = anotherJobsRaw
      .filter((j) => j.id !== Number(id))
      .slice(0, 3);

    const formattedAnotherJobs: JobVacancy[] = anotherJobs.map((job) => ({
      id: job.id,
      title: job.title,
      company: job.company ? job.company : { id: 0, name: "Unknown Company" },
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

    const mailtoLink = `mailto:copteracareer@gmail.com?subject=${encodeURIComponent(
      "Report Lowongan Kerja"
    )}&body=career.coptera.id/job/${id}`;

    if (!job) {
      return (
        <div className="container mx-auto p-4 my-[32px] md:my-[48px] lg:my-[72px] h-full flex flex-col items-center justify-center">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-[#2060E9]">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-4">
              Maaf, Halaman yang anda cari tidak ditemukan
            </p>
            <div className="bg-[#2060E9] text-white text-[16px] font-[600] rounded-md flex flex-row items-center content-center">
              <Link href="/" className="p-3 font-semibold rounded m-auto">
                Kembali ke Halaman Utama
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container mx-auto p-4 my-[32px] md:my-[48px] lg:my-[72px]">
        <Link href="/job" className="flex flex-row space-x-3 items-center mb-4">
          <div className="flex items-center h-[34px] w-[34px] px-1 py-2">
            <img src="/img/icon/i-arrow-left-black.png" alt="icon arrow left" />
          </div>
          <span className="font-semibold text-black text-base">Kembali</span>
        </Link>
        <div className="flex flex-col space-y-[40px]">
          <div className="flex flex-col lg:flex-row p-9 justify-between border border-[#737373] rounded-[18px] space-y-2">
            <div className="flex flex-col space-y-8">
              <div className="flex items-start gap-3">
                {/* Company Logo Placeholder */}
                {job.company_image || job.company.image ? (
                  <Avatar className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                    <AvatarImage
                      src={`https://api.career.coptera.id/${
                        job.company_image
                          ? job.company_image
                          : job.company.image
                      }`}
                      alt={
                        job.company_name ? job.company_name : job.company.name
                      }
                      className="object-cover w-full h-full"
                    />
                  </Avatar>
                ) : (
                  <div className="w-12 h-12 bg-blue-500 rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">
                      {job.company_name
                        ? job.company_name.charAt(0)
                        : job.company.name.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Company Details */}
                <div className="flex-1 space-y-1">
                  <h1
                    className="font-semibold text-black text-xl group-hover:text-blue-400 transition-colors text-left capitalize font-semibold line-clamp-1"
                    title={job.title}
                  >
                    {job.title}
                  </h1>
                  <div className="flex flex row space-x-1 items-center">
                    {job.company && job.company.is_verified ? (
                      <img
                        src="/img/icon/i-secure.png"
                        alt="icon verified"
                        className="h-6 w-6"
                      />
                    ) : (
                      ""
                    )}
                    <h3 className="text-[#155DFC] text-lg font-medium">
                      {job.company_name ? job.company_name : job.company.name}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 my-5 text-black font-normal text-base">
                {job.city && job.city.name && (
                  <div className="flex flex-row items-center space-x-2.5">
                    <img
                      src="/img/icon/i-location-blue.png"
                      alt="icon location"
                      className="h-6 w-6"
                    />
                    <span className="capitalize">{job.city.name}</span>
                  </div>
                )}
                {job.jobType && (
                  <div className="flex flex-row items-center space-x-2.5">
                    <img
                      src="/img/icon/i-suitcase-blue.png"
                      alt="icon job type"
                      className="h-6 w-6"
                    />
                    <span className="capitalize">{job.jobType.name}</span>
                  </div>
                )}
                {job.work_type && job.work_type !== "Unknown" && (
                  <div className="flex flex-row items-center space-x-2.5">
                    <img
                      src="/img/icon/i-building-blue.png"
                      alt="icon work type"
                      className="h-6 w-6"
                    />
                    <span className="capitalize">
                      {job.work_type.charAt(0).toUpperCase() +
                        job.work_type.slice(1)}
                    </span>
                  </div>
                )}
                <div className="flex flex-row items-center space-x-2.5">
                  <img
                    src="/img/icon/i-money-blue.png"
                    alt="icon salary"
                    className="h-6 w-6"
                  />
                  {job.jobVacancySalary ? (
                    <span>
                      {"Rp "}
                      {job.jobVacancySalary.minimum
                        ? job.jobVacancySalary.minimum.toLocaleString()
                        : "-"}
                      -
                      {job.jobVacancySalary.maximum
                        ? job.jobVacancySalary.maximum.toLocaleString()
                        : "-"}
                      {job.jobVacancySalary.currency || "-"} / Bulan
                    </span>
                  ) : (
                    <span>Rp. -</span>
                  )}
                </div>
              </div>
            </div>
            {job.jobVacancyFacilities.length > 0 ? (
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-3 lg:space-y-6">
                  <h2 className="font-bold text-[#171717] text-xl">Benefit</h2>
                  {job.jobVacancyFacilities.map((facility, indexFacility) => (
                    <div
                      className="flex flex-row items-center space-x-[14px] font-medium text-base"
                      key={indexFacility}
                    >
                      {facility.jobFacility.image ? (
                        <img
                          src={`https://api.career.coptera.id/${facility.jobFacility.image}`}
                          alt={facility.jobFacility.name}
                          className="h-6 w-6"
                        />
                      ) : (
                        <div className="h-6 w-6 flex items-center">
                          <span className="m-auto"> • </span>
                        </div>
                      )}
                      <span>{facility.jobFacility.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">Deskripsi Pekerjaan</h2>
            <div
              className="text-[#404040] leading-7 tracking-wide text-base [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-5"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>
          <div className="flex flex-col p-9 border border-[#737373] rounded-[18px] gap-10">
            <h2 className="font-bold text-xl text-[#171717]">
              Tentang Perusahaan
            </h2>
            <div className="flex flex-col space-y-8">
              <div className="flex items-start gap-3">
                {/* Company Logo Placeholder */}
                {job.company_image || job.company.image ? (
                  <Avatar className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                    <AvatarImage
                      src={`https://api.career.coptera.id/${
                        job.company_image
                          ? job.company_image
                          : job.company.image
                      }`}
                      alt={
                        job.company_name ? job.company_name : job.company.name
                      }
                      className="object-cover w-full h-full"
                    />
                  </Avatar>
                ) : (
                  <div className="w-12 h-12 bg-blue-500 rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">
                      {job.company_name
                        ? job.company_name.charAt(0)
                        : job.company.name.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Company Details */}
                <div className="flex-1 space-y-1">
                  <div className="flex flex row space-x-1 items-center">
                    {job.company && job.company.is_verified ? (
                      <img
                        src="/img/icon/i-secure.png"
                        alt="icon verified"
                        className="h-6 w-6"
                      />
                    ) : (
                      ""
                    )}
                    <h3 className="text-[#155DFC] text-lg font-bold text-2xl">
                      {job.company_name ? job.company_name : job.company.name}
                    </h3>
                  </div>
                  {job.company && job.company.companyType && (
                    <span className="text-base font-medium text-[#404040]">
                      {job.company.companyType.name}
                    </span>
                  )}
                </div>
              </div>
              {job.company && job.company.description && (
                <div
                  className="font-medium text-[#404040] text-base leading-7 tracking-wide text-base [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-5"
                  dangerouslySetInnerHTML={{ __html: job.company.description }}
                />
              )}
              {job.company && job.company.address && (
                <div className="flex flex-col space-y-3">
                  <h2 className="font-bold text-[#171717] text-[22px]">
                    Alamat
                  </h2>
                  <div className="flex flex-row space-x-2">
                    <img
                      src="/img/icon/i-address.png"
                      alt="icon address"
                      className="h-6 w-6"
                    />
                    <span className="font-medium text-[#404040] text-base">
                      {job.company.address}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col p-9 border border-[#C10007] rounded-[18px] gap-4 bg-[#FEF2F2]">
            <div className="flex flex-row items-center space-x-2">
              <img
                src="/img/icon/i-secure.png"
                alt="icon verified"
                className="h-6 w-6"
              />
              <h2 className="font-bold text-xl text-[#008236]">
                Cara Aman Mencari Pekerjaan
              </h2>
            </div>
            <span className="font-medium text-base text-[#404040]">
              Pekerjaan yang resmi tidak akan meminta akun Telegram, isi ulang
              saldo, atau pembayaran dalam bentuk apa pun. Hindari membagikan
              kontak pribadi, data rekening, atau informasi kartu kredit.
            </span>
            <div className="flex shrink-0">
              <a
                className="flex shrink-0 flex-row items-center space-x-2"
                href={mailtoLink}
              >
                <img
                  src="/img/icon/i-dislike-red.png"
                  alt="icon dislike"
                  className="h-6 w-6"
                />
                <span className="font-medium text-base text-[#C10007]">
                  Laporkan lowongan ini
                </span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            {formattedAnotherJobs.map((job, index) => (
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
                  is_company_verified: job.company
                    ? job.company.is_verified
                    : 0,
                  brand: job.company ? job.company.brand : "",
                  requirement: job.requirement || "No requirement specified",
                  work_type: job.work_type || "Unknown",
                  company_email: job.company?.email,
                  posting_date: timeAgo(new Date(job.created_at)),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto p-4 my-[32px] md:my-[48px] lg:my-[72px] h-full flex flex-col items-center justify-center">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-[#2060E9]">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-4">
            Maaf, Halaman yang anda cari tidak ditemukan
          </p>
          <div className="bg-[#2060E9] text-white text-[16px] font-[600] rounded-md flex flex-row items-center content-center">
            <Link href="/" className="p-3 font-semibold rounded m-auto">
              Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
