import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { User } from "@/model/user";
import { Mail, Pencil, Smartphone, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SheetComponentProps {
  isOpen: boolean;
  onClose: () => void;
  userData: User | null;
}

export const SheetComponent: React.FC<SheetComponentProps> = ({
  isOpen,
  onClose,
  userData,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!userData) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="p-0 max-w-[392px]">
        <ScrollArea className="h-screen">
          <div className="max-w-[392px]">
            <SheetHeader className="flex !flex-row !space-y-0 items-center justify-between border-b p-6 h-[68px]">
              <SheetTitle>User Detail</SheetTitle>

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

            <div className="flex flex-col items-center mt-6">
              <Avatar className="w-[150px] h-[150px]">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <h2 className="text-xl font-bold mt-5">
                {userData.first_name} {userData.last_name}
              </h2>

              <p className="text-gray-500 mt-[14px] mb-4">{userData.talent}</p>

              <div className="flex gap-2">
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button variant="outline">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Phone
                </Button>
              </div>
            </div>

            <div className="py-6 px-6 border-b">
              <h3 className="text-lg font-semibold">About</h3>
              <p
                className={`transition-all text-justify my-2 ${
                  isExpanded
                    ? "max-h-screen overflow-hidden"
                    : "max-h-6 truncate"
                } `}
              >
                Hello! Im John Doe, a graduate with a Bachelors degree. I have a
                passion for design and have been working in the industry for
                over 10 years. My expertise includes graphic design, user
                experience, and user interface design. I have a strong
                background in visual arts and have been involved in various
                projects ranging from web design to mobile app development. In
                my spare time, I enjoy painting, photography, and exploring new
                design trends.
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
              <h3 className="text-lg font-semibold mb-6">Job Information</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <p className="w-1/2 text-gray-500">Total Application</p>
                  <span className="flex-1 text-center">:</span>
                  <p className="w-1/2 text-right">
                    {userData.total_application}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="w-1/2 text-gray-500">Career Guidance</p>
                  <span className="flex-1 text-center">:</span>
                  <p className="w-1/2 text-right">{userData.career_guidance}</p>
                </div>
                <div className="flex justify-between">
                  <p className="w-1/2 text-gray-500">Resume/CV Created</p>
                  <span className="flex-1 text-center">:</span>
                  <p className="w-1/2 text-right">
                    {userData.resume ? "Yes" : "No"}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="w-1/2 text-gray-500">Assistance Apply</p>
                  <span className="flex-1 text-center">:</span>
                  <p className="w-1/2 text-right">
                    {userData.resume ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
