"use client";
import { jobData } from "../job/data/jobData";
import { useState } from "react";
import JobCard from "../job/_components/jobCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Jobs() {
  const [jobs, setJobs] = useState(jobData);

  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:py-24 lg:px-20 sm:px-6 md:px-12">
      <div className="mt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-[24px] md:text-[32px] font-bold">
              Latest Job <span className="text-yellow-400">Opportunities</span>
            </h1>
            <p className="text-[14px] text-gray-400 md:w-3/4 lg:w-1/2 text-justify mt-3">
              Navigate your career journey effortlessly. Explore job
              opportunities sorted by categories tailored to your expertise and
              interests.
            </p>
          </div>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 md:px-6">
            View More
          </Button>
          {/* Search Bar */}
        </div>
        <div className="flex justify-center">
          <div className="lg:w-1/2 md:w-5/6 bg-white p-1 rounded-lg flex items-center border border-gray-200">
            <div className="flex items-center w-full rounded-lg overflow-hidden">
              {/* Input Pencarian */}
              <Input
                type="text"
                placeholder="Search jobs"
                className="border-0 focus-visible:ring-0 rounded-none w-full px-4 py-2 text-sm"
              />

              {/* Select Pekerjaan */}
              <Select>
                <SelectTrigger className="rounded-none border-0 border-l border-gray-200">
                  <SelectValue placeholder="All City/Province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city-1">City 1</SelectItem>
                  <SelectItem value="city-2">City 2</SelectItem>
                  <SelectItem value="city-3">City 3</SelectItem>
                </SelectContent>
              </Select>

              {/* Tombol Search */}
              <Button className="bg-blue-500 text-white rounded-none hover:bg-blue-600 px-6">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="flex w-full overflow-x-auto">
            <TabsTrigger value="account" className="flex-shrink-0">
              IT & Software Development
            </TabsTrigger>
            <TabsTrigger value="password" className="flex-shrink-0">
              Sales Marketing
            </TabsTrigger>
            {/* <TabsTrigger value="password" className="flex-shrink-0">
              Finance Accounting
            </TabsTrigger>
            <TabsTrigger value="password" className="flex-shrink-0">
              Administration & HR
            </TabsTrigger>
            <TabsTrigger value="password" className="flex-shrink-0">
              Customer Service
            </TabsTrigger> */}
          </TabsList>
          <TabsContent value="account">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
              {jobs.slice(0, 9).map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4">
              {jobs.slice(0, 7).map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* <p className="text-center text-[14px] text-gray-400 mt-6">
          No jobs are currently available. Please check back soon.
        </p> */}
      </div>
    </section>
  );
}
