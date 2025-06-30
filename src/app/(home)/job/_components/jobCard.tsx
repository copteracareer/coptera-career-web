'use client';

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Briefcase, Building, Clock, GraduationCap, Layers, MapPin, Send } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function JobCard({ job }: { job: any }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handlePopState = () => {
      setOpen(false);
    };

    if (open) {
      window.history.pushState({ sheetOpen: true }, "", "?job=open");
      window.addEventListener("popstate", handlePopState);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [open]);

  return (
    <Sheet
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          window.history.replaceState(null, "", pathname);
        }
      }}
    >
      <SheetTrigger asChild>
      <div onClick={() => setOpen(true)} className="p-4 rounded-xl border border-gray-200 transition-colors group hover:bg-gradient-to-r hover:from-blue-100/75 hover:to-[#FFFFFF] cursor-pointer">
          <div className="flex items-start gap-3">
            {/* Company Logo Placeholder */}
            {job.company_image ? (
              <Avatar className="w-12 h-12 rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                <AvatarImage
                  src={`https://api.career.coptera.id/${job.company_image}`}
                  alt={job.company}
                  className="object-cover w-full h-full"
                />
              </Avatar>
            ) : (
              <div className="w-12 h-12 bg-blue-500 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">
                  {typeof job.company === 'string' ? job.company.charAt(0) : job.company.name.charAt(0)}
                </span>
              </div>
            )}

            {/* Company Details */}
            <div className="flex-1">
              <h1 className="font-semibold text-gray-700 text-xl group-hover:text-blue-400 transition-colors text-left capitalize">
                {job.title}
              </h1>
              <h3 className="text-gray-500 text-sm capitalize">
                {typeof job.company === 'string' ? job.company : job.company.name}
              </h3>
              {/* Job Title */}
            </div>
          </div>

          
          {/* Job Categories & Types */}
          <div className="flex flex-wrap gap-2 mb-3 mt-4">
            {job.location && job.location !== "Unknown" && (
              <span className="text-xs rounded-full flex items-center text-muted-foreground font-medium gap-1">
                <MapPin className="w-3 h-3" />
                <span className="capitalize">{job.location}</span>
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-3 mt-4">
            {job.category && job.category !== "Unknown" && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full flex items-center gap-1">
                <Layers className="w-3 h-3" />
                <span className="capitalize">{job.category}</span>
              </span>
            )}
            {job.type && job.type !== "Unknown" && (
              <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                <span className="capitalize">{job.type}</span>
              </span>
            )}
            {job.work_type && job.work_type !== "Unknown" && (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full flex items-center gap-1">
                <Building className="w-3 h-3" />
                <span className="capitalize">{job.work_type}</span>
              </span>
            )}
            {job.experience && job.experience !== "No experience specified" && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
                <GraduationCap className="w-3 h-3" />
                <span className="capitalize">{job.experience}</span>
              </span>
            )}
          </div>

          {/* Salary Information */}
          <div className="flex items-center gap-2 font-medium text-gray-700 text-sm mb-2">
            {job.salary && job.salary !== "Not specified" ? (
              <span>
                {"Rp"} {job.salary} / Bulan
              </span>
            ) : (
              <span className="text-gray-500">Rp. -</span>
            )}
          </div>

          {/* Due Date */}
          {job.due_date && (
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className={`${new Date() > job.due_date ? 'text-red-500' : 'text-gray-700'}`}>
                {job.due_date.toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'})}
              </span>
              {new Date() > job.due_date && (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Expired</span>
              )}
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[1200px] sm:max-w-none z-[999999] overflow-auto">
        <SheetHeader>
          <SheetTitle>Detail Pekerjaan</SheetTitle>
        </SheetHeader>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-2 lg:p-8">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold">{job.title}</h1>

            <div className="flex flex-wrap gap-2">
              {job.location && job.location !== "Unknown" && (
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span className="capitalize">{job.location}</span>
                </span>
              )}
              {job.type && job.type !== "Unknown" && (
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full flex items-center gap-1">
                  <Briefcase className="w-3 h-3" />
                  <span className="capitalize">{job.type}</span>
                </span>
              )}
              {job.work_type && job.work_type !== "Unknown" && (
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full flex items-center gap-1">
                  <Building className="w-3 h-3" />
                  <span className="capitalize">{job.work_type}</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 font-medium text-gray-700 text-[16px] sm:text-[18px] mb-2">
              {job.salary && job.salary !== "Not specified" ? (
                <span>
                  {"Rp"} {job.salary} / Bulan
                </span>
              ) : (
                <span className="text-gray-500">Rp. -</span>
              )}
            </div>

            <Separator />

            <div className="flex flex-col gap-4">
              <h1 className="font-semibold">Deskripsi Pekerjaan</h1>
              <div
                className="text-gray-500 leading-7 tracking-wide text-[14px]"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 p-4 bg-gray-50 rounded-xl shadow-sm">
            <Link
              href={job.company_email ? `mailto:${job.company_email}` : job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="brand" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Apply
              </Button>
            </Link>

            <Separator className="my-4" />

            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                <AvatarImage
                  src={`https://api.career.coptera.id/${job.company_image}`}
                  alt={job.company}
                  className="object-cover w-full h-full"
                />
              </Avatar>
              <div>
                <h3 className="text-[14px] font-semibold text-left">{job.company}</h3>
                <span className="text-gray-500 text-[12px]">{job.company_address}</span>
              </div>
            </div>

            <div>
              <h2 className="text-[14px] font-semibold">Tentang Perusahaan</h2>
              <div
                className="text-gray-500 leading-7 tracking-wide text-[14px]"
                dangerouslySetInnerHTML={{ __html: job.company_description }}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}