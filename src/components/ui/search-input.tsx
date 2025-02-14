import * as React from "react";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "search", ...props }, ref) => {
    return (
      <div className="flex min-w-[363px] items-center gap-2 rounded-lg px-3 py-[10px] border bg-white">
        <Search />
        <input
          type={type}
          className={cn(
            "flex w-full rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 h-[25px]",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
SearchInput.displayName = "Input";

export { SearchInput };
