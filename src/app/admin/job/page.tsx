"use client";

import React, { useEffect, useState, useCallback } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronsUpDown,
  FileSearch2,
  MoreHorizontal,
  Plus,
  SquarePen,
  Trash2,
  Upload,
} from "lucide-react";
import ContentPageComponent, {
  ButtonConfig,
} from "../_components/contentPageComponent";
import AdminDataTable from "../_components/table/adminDataTable";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import jobApi from "@/utils/api/job";
import { useRouter } from "next/navigation";
import { SheetJob } from "../_components/table/SheetJob";
import { JobVacancy } from "@/model/job";
import { getJobVacancies } from "../../../../actions/job-vacancy";

const Job = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);
  const [jobs, setJobs] = useState<JobVacancy[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // ✅ Menggunakan useCallback untuk memastikan fungsi tidak berubah di setiap render
  const fetchJobs = useCallback(async () => {
    try {
      const response = await getJobVacancies();
      setJobs(response?.data?.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleExportButtonClick = () => {
    console.log("Export button clicked");
  };

  const button: ButtonConfig[] = [
    {
      label: "Export",
      icon: <Upload className="h-4 w-4" />,
      onClick: handleExportButtonClick,
      variant: "outline",
    },
    {
      label: "Add Job",
      icon: <Plus className="h-4 w-4" />,
      onClick: () => router.push("/admin/job/create"),
    },
  ];

  const handleDeleteJob = async (id: string) => {
    try {
      await jobApi.jobDelete(id);
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  };

  const handleStatusChange = async (job: JobVacancy, newStatus: boolean) => {
    try {
      // Simulasi API Update Status Job
      await jobApi.updateJobStatus(job.id, newStatus);
      setJobs((prevJobs) =>
        prevJobs.map((j) =>
          j.id === job.id ? { ...j, is_closed: newStatus } : j
        )
      );
    } catch (error) {
      console.error("Failed to update job status:", error);
    }
  };

  const columns: ColumnDef<JobVacancy>[] = [
    {
      accessorKey: "id",
      header: "Job ID",
      cell: ({ row }) => (
        <div className="flex items-center gap-5">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
          {row.getValue("id")}
        </div>
      ),
    },
    {
      accessorKey: "title",
      header: "Job Title",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("title")}</div>
      ),
    },
    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ row }) => (
        <div className="lowercase">{row.original.company?.brand}</div>
      ),
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => (
        <div className="lowercase">{row.original.work_type}</div>
      ),
    },
    {
      accessorKey: "total_position",
      header: "Total Position",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("total_position")}</div>
      ),
    },
    {
      accessorKey: "is_closed",
      header: "Status Job",
      cell: ({ row }) => {
        const job = row.original;
        return (
          <div className="flex items-center justify-center">
            <Switch
              checked={job.is_closed}
              onCheckedChange={(checked) => handleStatusChange(job, checked)}
              className="text-center"
              id={`switch-${job.id}`}
            />
          </div>
        );
      },
    },
    {
      id: "action",
      header: "Action",
      cell: ({ row }) => {
        const job = row.original;
        return (
          <div className="flex items-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedJob(job);
                    setIsSheetOpen(true);
                  }}
                >
                  <FileSearch2 className="w-4 h-4 mr-2" />
                  View Details
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    className="flex items-center"
                    href={`/admin/job/${job.id}`}
                  >
                    <SquarePen className="w-4 h-4 mr-2" />
                    Edit Job
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleDeleteJob(job.id)}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
    {
      accessorKey: "created_at",
      header: "Created At",
      cell: ({ row }) =>
        new Date(row.getValue("created_at")).toLocaleDateString(),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ContentPageComponent title="Job" button={button}>
      <SheetJob
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        jobData={selectedJob}
      />
      <div className="px-8">
        <AdminDataTable
          data={jobs}
          columns={columns}
          searchPlaceholder="Search jobs..."
        />
      </div>
    </ContentPageComponent>
  );
};

export default Job;
