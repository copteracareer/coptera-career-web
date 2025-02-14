"use client";

import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobs = await getJobVacancies();
        setJobs(jobs?.data?.data?.data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    // setLoading(false);
    fetchJobs();
  }, []);

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
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  };

  const columns: ColumnDef<Job>[] = [
    {
      accessorKey: "id",
      header: ({ table, column }) => (
        <div className="flex items-center gap-5">
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />

          <Button
            variant="ghost"
            className="p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Job ID
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-5">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />

          <div className="">{row.getValue("id")}</div>
        </div>
      ),
    },
    {
      accessorKey: "title",
      id: "title",
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Job title
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("title")}</div>
      ),
      filterFn: (row, columnId, value) => {
        const jobName = `${row.getValue("title")}`.toLowerCase();
        return jobName.includes(value.toLowerCase());
      },
    },
    {
      accessorKey: "brand",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Brand
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.original.company?.brand}</div>
      ),
    },
    {
      accessorKey: "type",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Type
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.original.work_type}</div>
      ),
    },
    {
      accessorKey: "total_position",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Position
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("total_position")}</div>
      ),
    },
    {
      accessorKey: "is_closed",
      header: ({ column }) => <div className="text-center">Status Job</div>,
      cell: ({ row }) => {
        const [status, setStatus] = useState(
          row.getValue("is_closed") === true
        );

        const handleStatusChange = async (checked: boolean) => {
          setStatus(checked);

          // Dummy function untuk mensimulasikan update status ke server
        };

        return (
          <div className="flex items-center justify-center">
            <Switch
              // checked={status}
              // onCheckedChange={handleStatusChange}
              className="text-center"
              id={`switch-${row.original.id}`}
            />
          </div>
        );
      },
      filterFn: (row, columnId, value) => {
        if (value === "active") return row.original.status === true;
        if (value === "inactive") return row.original.status === false;
        return true;
      },
    },
    {
      id: "action",
      // enableHiding: false,
      header: () => <div className="text-center">Action</div>,
      cell: ({ row }) => {
        const job = row.original;

        return (
          <div className="flex items-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
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
                  <div className="flex items-center">
                    <FileSearch2 className="w-4 h-4 mr-2" />
                    View Details
                  </div>
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
      id: "created_atVissible",
      header: "Created At",
      filterFn: (row, columnId, value) => {
        const created_at = new Date(row.original.created_at).getTime();
        const currentDate = new Date().getTime();

        if (value === "newest") {
          return created_at > currentDate - 10 * 24 * 60 * 60 * 1000; // 10 hari terakhir
        }

        if (value === "latest") {
          return created_at <= currentDate;
        }

        return true;
      },
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
