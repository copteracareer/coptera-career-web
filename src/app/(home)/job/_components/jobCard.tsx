import { Badge, MapPin, Share2 } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
// import { shortenText } from "@/utils/helper";

// const apiUrl = process.env.NEXT_PUBLIC_COPTERA_API as string;

// interface JobCardProps {
//   job: {
//     title: string;
//     company: string;
//     location: string;
//     type: string;
//     experience: string;
//     salary: string;
//   };
// }

export default function JobCard({ job }: { job: any }) {
  return (
    <Link
      href={job.link ? job.link : "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-4 rounded-xl border border-gray-200 transition-colors group hover:bg-gradient-to-r hover:from-blue-100/75 hover:to-[#FFFFFF] cursor-pointer">
        <div className="flex items-start gap-3">
          {/* Company Logo Placeholder */}
          <div className="w-12 h-12 bg-blue-500 rounded-sm flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">
              {job.company.charAt(0)}
            </span>
          </div>

          {/* Job Details */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-700 mb-1 text-sm">
                {job.company}
              </h3>
            </div>
            <div className="flex items-center gap-1 text-gray-500/60">
              <MapPin className="w-4 h-4" />
              <p className="text-sm">{job.location}</p>
            </div>
          </div>
        </div>
        <h1 className="font-semibold text-gray-700 text-xl my-4 group-hover:text-blue-400 transition-colors text-left">
          {job.title}
        </h1>
        <div className="flex items-center gap-1 text-gray-500/60 text-sm">
          <span>Rp. {job.salary}</span>
        </div>
      </div>
    </Link>
    // <Sheet>
    //   <SheetTrigger asChild>
    //     <div className="p-4 rounded-xl border border-gray-200 transition-colors group hover:bg-gradient-to-r hover:from-blue-100/75 hover:to-[#FFFFFF] cursor-pointer">
    //       <div className="flex items-start gap-3">
    //         {/* Company Logo Placeholder */}
    //         <div className="w-12 h-12 bg-blue-500 rounded-sm flex items-center justify-center flex-shrink-0">
    //           <span className="text-white font-bold">
    //             {job.company.charAt(0)}
    //           </span>
    //         </div>

    //         {/* Job Details */}
    //         <div>
    //           <div className="flex items-center gap-2">
    //             <h3 className="font-semibold text-gray-700 mb-1 text-sm">
    //               {job.company}
    //             </h3>
    //           </div>
    //           <div className="flex items-center gap-1 text-gray-500/60">
    //             <MapPin className="w-4 h-4" />
    //             <p className="text-sm">{job.location}</p>
    //           </div>
    //         </div>
    //       </div>
    //       <h1 className="font-semibold text-gray-700 text-xl my-4 group-hover:text-blue-400 transition-colors text-left">
    //         {job.title}
    //       </h1>
    //       <div className="flex items-center gap-1 text-gray-500/60 text-sm">
    //         <span>Rp. {job.salary}</span>
    //       </div>
    //     </div>
    //   </SheetTrigger>
    //   <SheetContent className="w-[400px] sm:w-[1200px] sm:max-w-none z-[999999] overflow-auto">
    //     <SheetTitle>{job.title}</SheetTitle>
    //     <div className="grid grid-cols-12 gap-4 p-8">
    //       <div className="col-span-9 flex flex-col gap-6">
    //         <h1 className="text-[24px] font-bold">{job.title}</h1>
    //         <div className="flex gap-2">
    //           {/* <Badge>{job.work_type}</Badge> */}
    //           <Badge>Remote</Badge>
    //         </div>
    //         <h1 className="text-[18px] font-semibold">
    //           {/* Rp. {(job.jobVacancySalary ?? 0).toLocaleString()} */}
    //         </h1>
    //         <Separator />
    //         <div className="flex gap-4 justify-between">
    //           <div className="flex flex-col gap-2">
    //             <span className="text-[13px] font-medium">
    //               Education Requirement
    //             </span>
    //             <span className="font-bold text-[16px] text-blue-600">S1</span>
    //           </div>
    //           <div className="flex flex-col gap-2">
    //             <span className="text-[13px] font-medium">Department</span>
    //             <span className="font-bold text-[16px] text-blue-600">
    //               Marketing
    //             </span>
    //           </div>
    //           <div className="flex flex-col gap-2">
    //             <span className="text-[13px] font-medium">Location</span>
    //             <span className="font-bold text-[16px] text-blue-600">
    //               Remote
    //             </span>
    //           </div>
    //           <div className="flex flex-col gap-2">
    //             <span className="text-[13px] font-medium">Sub-Departement</span>
    //             <span className="font-bold text-[16px] text-blue-600">
    //               Marketing
    //             </span>
    //           </div>
    //         </div>
    //         <Separator />
    //         <div className="flex flex-col gap-4">
    //           <h1 className="font-semibold">Job Description</h1>
    //           <p className="text-gray-500 leading-7 tracking-wide text-[14px]">
    //             {/* <div dangerouslySetInnerHTML={{ __html: job.description }} /> */}
    //             {/* <div /> */}
    //           </p>
    //         </div>
    //         <div className="flex flex-col gap-4 my-4">
    //           <h1 className="font-semibold">Job Requirement</h1>
    //           <ul className="list-disc list-inside text-gray-500 leading-7 tracking-wide text-[14px]">
    //             <li>
    //               Currently pursuing a degree in Marketing, Communications,
    //               Business, or a related field
    //             </li>
    //             <li>
    //               Currently pursuing a degree in Marketing, Communications,
    //               Business, or a related field
    //             </li>
    //             <li>
    //               Currently pursuing a degree in Marketing, Communications,
    //               Business, or a related field
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-span-3 flex flex-col gap-2 p-4">
    //         <div className="flex items-center gap-4 mt-5">
    //           <Avatar>
    //             <AvatarImage
    //               // src={`${apiUrl}/${job.company.image}`}
    //               src={`#`}
    //               alt="@shadcn"
    //             />
    //           </Avatar>
    //           <div>
    //             <h3 className="text-[14px] font-semibold text-left">
    //               {/* {job.company.name} */}
    //             </h3>
    //             <span className="text-gray-500 text-[12px]">
    //               {/* {job.company.address} */}
    //             </span>
    //           </div>
    //         </div>
    //         <div className="my-4">
    //           <h2 className="text-[14px] font-semibold">About Us</h2>
    //           <p className="text-gray-500 text-[12px] leading-7 tracking-wide">
    //             {" "}
    //             {/* {shortenText(job.company.description, 250)} */}
    //           </p>
    //           <a href="#" className="text-blue-600 text-[12px] font-semibold">
    //             Lihat Selengkapnya
    //           </a>
    //         </div>
    //         <Separator className="my-4" />
    //         <Link
    //           // href={job.link}
    //           href={"#"}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="w-full"
    //         >
    //           <Button className="w-full">Apply</Button>
    //         </Link>
    //         <Button variant={"outline"} className="flex gap-2 items-center">
    //           <Share2 className="h-4 w-4" />
    //           Share
    //         </Button>
    //       </div>
    //     </div>
    //   </SheetContent>
    // </Sheet>
  );
}
