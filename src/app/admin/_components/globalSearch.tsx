import { SearchInput } from "@/components/ui/search-input";
import React from "react";

const GlobalSearch = () => {
  return (
    <div className="max-w-[600px]">
      <SearchInput
        type="text"
        placeholder="Search...."
        className="placeholder border-none shadow-none outline-none"
      />
    </div>
  );
};

export default GlobalSearch;
