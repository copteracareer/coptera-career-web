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
import { useEffect, useCallback } from "react";
import { Job } from "@/model/job";
import jobApi from "@/utils/api/job";

// Skema validasi data formulir
const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  company: z.string(),
  state: z.string(),
  city: z.string(),
  address: z.string(),
  category: z.string(),
  min_experience: z.string(),
  description: z.string(),
  requirement: z.string(),
  linkedin: z.string(),
  created_at: z.string(),
  img: z.string().url(),
});

type FormValues = z.infer<typeof FormSchema>;

const UpdateJob = ({ params }: { params: { id_update: string } }) => {
  const router = useRouter();

  const methods = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const { reset } = methods;

  // Fetch job data
  const fetchJob = useCallback(async () => {
    try {
      const jobData = await jobApi.job(params.id_update);
      reset(jobData);
    } catch (error) {
      console.error("Failed to fetch job:", error);
    }
  }, [params.id_update, reset]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  const handleUpdateJob = async (_id: string, _data: Job) => {
    console.log("Function handleUpdateJob is defined but not used");
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleUpdateJob(data.id, data);
  };

  const handleCancelButton = () => {
    router.push("/admin/job");
  };

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
          placeholder: "Cth: Web Developer",
        },
        {
          name: "company",
          label: "Company Name",
          type: "text",
          placeholder: "Cth: Tech Corp",
        },
        {
          name: "category",
          label: "Category",
          type: "text",
          placeholder: "Cth: Programming",
        },
        {
          name: "location",
          label: "Location",
          type: "text",
          placeholder: "Cth: Jakarta",
        },
        {
          name: "employment_type",
          label: "Employment Type",
          type: "select",
          placeholder: "Select",
        },
        {
          name: "job_description",
          label: "Job Description",
          type: "text",
          placeholder: "Deskripsi Pekerjaan",
        },
        {
          name: "requirement",
          label: "Requirement",
          type: "text",
          placeholder: "Cth: Bachelor Degree",
        },
        {
          name: "post_date",
          label: "Post Date",
          type: "date",
          placeholder: "Cth: 2023-01-01",
        },
        {
          name: "number_of_applicants",
          label: "Number of Applicants",
          type: "number",
          placeholder: "Cth: 1",
        },
        {
          name: "experience",
          label: "Experience",
          type: "text",
          placeholder: "Cth: 8 Weeks",
        },
        {
          name: "job_application_link",
          label: "Job Application Link",
          type: "text",
          placeholder: "Cth: www.example.com",
        },
        {
          name: "status",
          label: "Status Job",
          type: "select",
          placeholder: "Select",
          selectOptions: [
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
          ],
        },
        { name: "image", label: "Upload Image", type: "file", placeholder: "" },
      ],
    },
  ];

  const button: ButtonConfig[] = [
    { label: "Cancel", onClick: handleCancelButton, variant: "outline" },
    { label: "Update Job", onClick: methods.handleSubmit(onSubmit) },
  ];

  return (
    <ContentPageComponent title="Update Job" button={button}>
      <div className="px-8 py-8 bg-white h-full">
        <AdminCustomForm
          methods={methods}
          sections={sections}
          onSubmit={onSubmit}
        />
      </div>
    </ContentPageComponent>
  );
};

export default UpdateJob;
