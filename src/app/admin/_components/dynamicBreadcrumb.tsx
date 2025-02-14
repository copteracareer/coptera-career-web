"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const breadcrumbNameMap: { [key: string]: string } = {
  admin: "Dashboard",
  user: "User",
  company: "Company",
  course: "Course",
  job: "Job",
  article: "Article",
};

const DynamicBreadcrumb = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);

  const generateBreadcrumbs = () => {
    return pathParts.map((part, index) => {
      const href = "/" + pathParts.slice(0, index + 1).join("/");
      let name = breadcrumbNameMap[part] || part;

      // Check if the part is a dynamic ID or specific route like 'create'
      if (index > 0 && !breadcrumbNameMap[part] && !isNaN(Number(part))) {
        const prevPart = pathParts[index - 1];
        if (prevPart === "user") {
          name = "Update User";
        } else if (prevPart === "company") {
          name = "Update Company";
        } else if (prevPart === "course") {
          name = "Update Course";
        } else if (prevPart === "job") {
          name = "Update Job";
        } else if (prevPart === "article") {
          name = "Update Article";
        }
      } else if (index > 0 && part === "create") {
        const prevPart = pathParts[index - 1];
        if (prevPart === "user") {
          name = "Create User";
        } else if (prevPart === "company") {
          name = "Create Company";
        } else if (prevPart === "course") {
          name = "Create Course";
        } else if (prevPart === "job") {
          name = "Create Job";
        } else if (prevPart === "article") {
          name = "Create Article";
        }
      }

      return (
        <React.Fragment key={index}>
          <BreadcrumbItem>
            <BreadcrumbLink href={href}>
              {name
                .replace(/[-_]/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {index < pathParts.length - 1 && <BreadcrumbSeparator />}
        </React.Fragment>
      );
    });
  };

  if (!isMounted) {
    return null; // Atau return placeholder, spinner, dll.
  }

  return (
    <Breadcrumb className="">
      <BreadcrumbList>{generateBreadcrumbs()}</BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
