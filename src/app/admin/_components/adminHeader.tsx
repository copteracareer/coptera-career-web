import React from "react";
import { Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GlobalSearch from "./globalSearch";

const AdminHeader = () => {
  return (
    <nav className="flex justify-between sticky top-0 items-center px-8 py-3 border-b bg-white">
      <GlobalSearch />
      <div className="flex items-center gap-6">
        <Bell className="w-6 h-6" />

        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm">Adam Smith</p>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
