/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import ContentPageComponent, {
  ButtonConfig,
} from "../../_components/contentPageComponent";
import { AdminCustomForm } from "../../_components/form/AdminCustomForm";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormFieldConfig } from "../../_components/form/FormFieldComponent";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { getCompanies } from "../../../../../actions/company";
import { getJobExperience } from "../../../../../actions/job-experiences";
import { getJobClassification } from "../../../../../actions/job-classification";
import { Company } from "@/model/company";
import { useEffect, useState } from "react";
import { JobExperience } from "../../../../../actions/job-experiences/get";
import { getWorkTypes } from "../../../../../actions/job-types";
import { getEducationLevels } from "../../../../../actions/education-levels";
import { createJobVacancy } from "../../../../../actions/job-vacancy";

const FormSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company is required"),
  jobExperience: z.string().min(1, "Job Experience is required"),
  jobClassfication: z.string().min(1, "Job Classification is required"),
  dueDate: z.string().min(1, "Due Date is required"),
  link: z.string().min(1, "Link is required"),
  minimumSalary: z.string().min(1, "Minimum Salary is required"),
  maximumSalary: z.string().min(1, "Maximum Salary is required"),
  frequency: z.string().min(1, "Frequency is required"),
  description: z.string().min(1, "Description is required"),
  jobType: z.string().min(1, "Job Type is required"),
});

type FormValues = z.infer<typeof FormSchema>;

interface OptionInterface {
  value: string;
  label: string;
}

const CreateJob = () => {
  const [companies, setCompanies] = useState<OptionInterface[]>([]);
  const [jobExperiences, setJobExperiences] = useState<OptionInterface[]>([]);
  const [jobClassifications, setJobClassifications] = useState<
    OptionInterface[]
  >([]);
  const [workTypes, setWorkTypes] = useState<OptionInterface[]>([]);
  const [educationLevels, setEducationLevels] = useState<OptionInterface[]>([]);

  const fetchCompanies = async () => {
    try {
      const companies = await getCompanies();
      const companyOptions = companies.map((company) => ({
        value: String(company.id),
        label: company.name,
      }));
      setCompanies(companyOptions);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const fetchJobExperiences = async () => {
    try {
      const jobExperiences = await getJobExperience();
      const jobExperiencesOptions = jobExperiences?.map((jobExperience) => ({
        value: String(jobExperience.id),
        label: jobExperience.name,
      }));
      setJobExperiences(jobExperiencesOptions);
    } catch (error) {
      console.error("Error fetching jobExperiences:", error);
    }
  };

  const fetchJobClassifications = async () => {
    try {
      const jobClassifications = await getJobClassification();
      console.log("jobClassifications", jobClassifications);
      const jobClassificationsOptions = jobClassifications.map(
        (jobClassification) => ({
          value: String(jobClassification.id),
          label: jobClassification.name,
        })
      );
      setJobClassifications(jobClassificationsOptions);
    } catch (error) {
      console.error("Error fetching jobClassifications:", error);
    }
  };

  const fetchWorkTypes = async () => {
    try {
      const workTypes = await getWorkTypes();
      console.log("workTypes", workTypes);
      const workTypesOptions = workTypes.map((workType) => ({
        value: String(workType.id),
        label: workType.name,
      }));
      setWorkTypes(workTypesOptions);
    } catch (error) {
      console.error("Error fetching workTypes:", error);
    }
  };

  const fetchEducationLevels = async () => {
    try {
      const educationLevels = await getEducationLevels();
      console.log("educationLevels", educationLevels);
      const educationLevelsOptions = educationLevels.map((educationLevel) => ({
        value: String(educationLevel.id),
        label: educationLevel.name,
      }));
      setEducationLevels(educationLevelsOptions);
    } catch (error) {
      console.error("Error fetching educationLevels:", error);
    }
  };

  useEffect(() => {
    fetchCompanies();
    fetchJobExperiences();
    fetchJobClassifications();
    fetchWorkTypes();
    fetchEducationLevels();
  }, []);

  const router = useRouter();

  const methods = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      company: "",
      jobExperience: "",
      jobClassfication: "",
      workType: "",
      dueDate: "",
      link: "",
      minimumSalary: "",
      maximumSalary: "",
      frequency: "",
      description: "",
      jobType: "",
    },
  });

  const handleCreateJob: SubmitHandler<FormValues> = async (data) => {
    console.log("Creating job with data:", data);
    try {
      const jobData = {
        company_id: parseInt(data.company),
        job_experience_id: parseInt(data.jobExperience),
        job_classification_id: parseInt(data.jobClassfication),
        job_type_id: parseInt(data.workType),
        education_level_id: 1,
        title: data.title,
        due_date: data.dueDate,
        description: data.description,
        link: data.link,
        minimum: parseInt(data.minimumSalary),
        maximum: parseInt(data.maximumSalary),
        frequency: data.frequency,
        work_type: data.jobType,
        city_id: null,
      };
      console.log("jobData", jobData);
      await createJobVacancy(jobData);
      toast({
        title: "Success",
        description: "Job created successfully.",
        action: (
          <ToastAction altText="Done" asChild>
            <Button
              variant="default"
              className="bg-blue-600 text-white hover:bg-blue-500"
            >
              Done
            </Button>
          </ToastAction>
        ),
      });
      router.push("/admin/job");
    } catch (error) {
      console.error("Failed to create job:", error);
      toast({
        title: "Error",
        description: "Failed to create job. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCancelButton = () => {
    router.push("/admin/jobs");
  };

  const button: ButtonConfig[] = [
    {
      label: "Cancel",
      onClick: handleCancelButton,
      variant: "outline",
    },
    {
      label: "Create Job",
      onClick: methods.handleSubmit(handleCreateJob),
    },
  ];

  const sections: Array<{
    title: string;
    fields: Array<FormFieldConfig | FormFieldConfig[]>;
  }> = [
    {
      title: "Job Info",
      fields: [
        {
          name: "title",
          label: "Job Title",
          type: "text",
          placeholder: "Enter job title",
        },
        {
          name: "company",
          label: "Company Name",
          type: "select",
          placeholder: "Enter company name",
          selectOptions:
            companies.length > 0
              ? companies
              : [{ value: "1", label: "Loading companies..." }],
        },
        {
          name: "jobExperience",
          label: "Job Experience",
          type: "select",
          placeholder: "Enter Job Experience",
          selectOptions:
            jobExperiences.length > 0
              ? jobExperiences
              : [{ value: "1", label: "Loading job experiences..." }],
        },
        {
          name: "jobClassfication",
          label: "Job Classification",
          type: "select",
          placeholder: "Enter Job Classification",
          selectOptions:
            jobClassifications.length > 0
              ? jobClassifications
              : [{ value: "1", label: "Loading job classifications..." }],
        },
        {
          name: "workType",
          label: "Job Type",
          type: "select",
          placeholder: "Enter Work Type",
          selectOptions:
            workTypes.length > 0
              ? workTypes
              : [{ value: "1", label: "Loading work types..." }],
        },
        {
          name: "jobType",
          label: "Work Type",
          type: "select",
          placeholder: "Enter Work Type",
          selectOptions: [
            { value: "onsite", label: "Onsite" },
            { value: "remote", label: "Remote" },
            { value: "hybrid", label: "Hybrid" },
          ],
        },
        {
          name: "educationLevel",
          label: "Education Level",
          type: "select",
          placeholder: "Enter Education Level",
          selectOptions:
            educationLevels.length > 0
              ? educationLevels
              : [{ value: "1", label: "Loading education levels..." }],
        },
        {
          name: "dueDate",
          label: "Due Date",
          type: "date",
          placeholder: "Enter Due Date",
        },
        {
          name: "link",
          label: "Link",
          type: "text",
          placeholder: "Enter link",
        },
        {
          name: "description",
          label: "Description",
          type: "text",
          placeholder: "Enter description",
        },
        {
          name: "minimumSalary",
          label: "Minimum Salary",
          type: "number",
          placeholder: "Enter minimum salary",
        },
        {
          name: "maximumSalary",
          label: "Maximum Salary",
          type: "number",
          placeholder: "Enter maximum salary",
        },
        {
          name: "frequency",
          label: "Frequency",
          type: "select",
          placeholder: "Enter frequency",
          selectOptions: [
            { value: "hour", label: "Hourly" },
            { value: "day", label: "Daily" },
            { value: "month", label: "Monthly" },
            { value: "year", label: "Yearly" },
          ],
        },
      ],
    },
  ];

  return (
    <ContentPageComponent title="Create Job" button={button} form={methods}>
      <div className="px-8 py-8 bg-white h-full">
        <AdminCustomForm
          methods={methods}
          sections={sections}
          onSubmit={handleCreateJob}
        />
      </div>
    </ContentPageComponent>
  );
};

export default CreateJob;
