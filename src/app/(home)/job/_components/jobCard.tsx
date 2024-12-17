import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { shortenText } from "@/utils/helper";
import Link from "next/link";

interface JobCardProps {
  job: {
    title: string;
    company: string;
    location: string;
    type: string;
    experience: string;
    salary: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className={`p-6 rounded-xl shadow-md`}>
      <div className="flex justify-between items-center">
        <div className="text-gray-400 flex items-center text-[12px] gap-2">
          <MapPin className="h-4 w-4" />
          <p>{shortenText(job.location)}</p>
        </div>
        <p className="text-gray-400 text-[12px]">1d ago</p>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <Avatar>
          <AvatarImage src={`j`} alt="@shadcn" />
        </Avatar>
        <div>
          <h2 className="text-[16px] font-bold">{job.title}</h2>
          <h3 className="text-[14px] text-yellow-400 font-semibold text-left">
            {job.title}
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-5">
        <Badge variant={"brand-primary"}>{job.type}</Badge>
        <Badge variant={"brand-primary"}>1 - 3 Years</Badge>
        <Badge variant={"brand-primary"}>Work from Office</Badge>
      </div>
      <Separator className="my-5 border-gray-100 border-[2px]" />
      <div className="flex justify-between items-center">
        <h1 className="text-[18px] font-bold text-gray-900">
          Rp. {(job.salary ?? 0).toLocaleString()}
        </h1>
        <Link href={"/"} target="_blank" rel="noopener noreferrer">
          <Button className="ml-6">Apply Now</Button>
        </Link>
      </div>
    </div>
  );
}
