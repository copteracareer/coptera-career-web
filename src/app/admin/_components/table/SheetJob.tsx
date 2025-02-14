import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Job } from "@/model/job";
import { Pencil, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface SheetComponentProps {
  isOpen: boolean;
  onClose: () => void;
  jobData: Job | null;
}

export const SheetJob: React.FC<SheetComponentProps> = ({
  isOpen,
  onClose,
  jobData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!jobData) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="p-0 !max-w-[480px]">
        <ScrollArea className="h-screen">
          <div className="max-w-[480px]">
            <SheetHeader className="flex !flex-row !space-y-0 items-center justify-between border-b p-6 h-[68px]">
              <SheetTitle>Job Detail</SheetTitle>

              <div className="flex items-center gap-4">
                <Button variant={"link"} className="p-0">
                  <Pencil className="h-4 w-4" />
                </Button>
                <SheetClose asChild>
                  <Button variant={"link"} className="p-0">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
            </SheetHeader>

            <div className="flex flex-col items-center mt-6 px-6">
              <div className="w-[334px] h-[183px] flex justify-center items-center">
                <Image
                  width={150}
                  height={150}
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </div>

              <div className="w-full">
                <p className="px-3 py-2 bg-blue-600 rounded-lg text-white text-xs w-fit">
                  {jobData.category}
                </p>

                <h2 className="text-xl font-semibold flex w-full mt-4">
                  {jobData.title}
                </h2>

                <div className="flex gap-2 w-full mt-4">
                  <p className="flex gap-1 items-center">{jobData.type}</p>
                  <span className="text-gray-500">|</span>
                  <p>-</p>
                </div>
              </div>
            </div>

            <div className="py-6 px-6 border-b">
              <h3 className="text-lg font-semibold">Description</h3>
              <p
                className={`transition-all text-justify my-2 ${
                  isExpanded
                    ? "max-h-screen overflow-hidden"
                    : "max-h-6 truncate"
                } `}
              >
                {jobData.description}
              </p>
              <Button
                variant="link"
                className="p-0 text-blue-700 font-bold h-fit"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show Less" : "View Detail"}
              </Button>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-6">Job Requirement</h3>
              {/* <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <p className="w-1/2 text-gray-500">Instructor</p>
                  <span className="flex-1 text-center">:</span>
                  <p className="w-1/2 text-right">{jobData.instructor}</p>
                </div>
                <div className="flex justify-between">
                  <p className="w-1/2 text-gray-500">Duration</p>
                  <span className="flex-1 text-center">:</span>
                  <p className="w-1/2 text-right">{jobData.duration}</p>
                </div>
                <div className="flex justify-between">
                  <p className="w-1/2 text-gray-500">Timeline</p>
                  <span className="flex-1 text-center">:</span>
                  <p className="w-1/2 text-right">
                    {new Date(jobData.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(jobData.endDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="w-1/2 text-gray-500">Certificate Available</p>
                  <span className="flex-1 text-center">:</span>
                  <p className="w-1/2 text-right">
                    {jobData.certificateAvailable ? "Yes" : "No"}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="w-1/2 text-gray-500">Number of Lecture</p>
                  <span className="flex-1 text-center">:</span>
                  <p className="w-1/2 text-right">{jobData.numberOfLectures}</p>
                </div>
              </div> */}
              <div>{jobData.requirement}</div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
