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
import { useState, useEffect } from "react";
import { Job } from "@/model/job";
import jobApi from "@/utils/api/job";

const internationalPhoneNumberSchema = z.string().regex(/^\+[1-9]\d{1,14}$/, {
  message: "Invalid international phone number format.",
});

const indonesiaPhoneNumberSchema = z
  .string()
  .regex(/^(?:\+62|0)[2-9]\d{7,11}$/, {
    message: "Invalid Indonesian phone number format.",
  });

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
  img: z.string().url(), // Assuming the image is a URL
});

type FormValues = z.infer<typeof FormSchema>;

const UpdateJob = ({ params }: { params: { id_update: string } }) => {
  const router = useRouter();

  const [jobs, setJobs] = useState<Job>();
  const [loading, setLoading] = useState(true);

  const methods = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const { reset } = methods;

  useEffect(() => {
    fetchJob();
  }, []);

  const fetchJob = async () => {
    try {
      const jobs = await jobApi.job(params.id_update);
      setJobs(jobs);
      reset(jobs);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteJob = async (id: string) => {
    try {
      await jobApi.jobDelete(id);
      console.log("job deleted successfully");
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  };

  const handleUpdateJob = async (id: string, data: Job) => {
    // try {
    //   await jobApi.jobUpdate(id, data);
    //   console.log("job updated successfully", data);
    //   toast({
    //     title: "Success",
    //     description: "User updated successfully.",
    //     action: (
    //       <ToastAction altText="Try again" asChild>
    //         <Button
    //           variant="default"
    //           className="bg-blue-600 text-white hover:bg-blue-500"
    //         >
    //           Done
    //         </Button>
    //       </ToastAction>
    //     ),
    //   });
    //   // router.push("/admin/user");
    // } catch (error) {
    //   console.error("Failed to delete user:", error);
    // }
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleUpdateJob(data.id, data);
    // handle create user logic
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
          placeholder: "Cth: Web Development",
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
          type: "number",
          placeholder: "Cth: 1",
        },
        {
          name: "requirement",
          label: "Requirement",
          type: "text",
          placeholder: "Cth: Bachelor Degree in Computer Science",
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
    {
      label: "Cancel",
      onClick: handleCancelButton,
      variant: "outline",
    },
    { label: "Update Job", onClick: methods.handleSubmit(onSubmit) },
  ];

  return (
    <ContentPageComponent title="Users" button={button}>
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
