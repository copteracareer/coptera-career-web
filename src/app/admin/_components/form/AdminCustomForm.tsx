import { UseFormReturn } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { AdminFormSection } from "./AdminFormSection";
import { FormFieldConfig } from "./FormFieldComponent";

interface CustomFormProps {
  methods: UseFormReturn<any>;
  sections: Array<{
    title: string;
    fields: Array<FormFieldConfig | FormFieldConfig[]>;
  }>;
  onSubmit: (data: any) => void;
}

const AdminCustomForm = ({ methods, sections, onSubmit }: CustomFormProps) => (
  <Form {...methods}>
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className="w-full space-y-6"
    >
      {sections.map((section, index) => (
        <div className="flex flex-col pb-7 border-b" key={index}>
          <div className="flex justify-between gap-36">
            <div className="max-w-fit flex flex-col gap-2">
              <h2 className="text-base font-bold">{section.title}</h2>
              <p className="text-sm text-[#7D818B]">
                Add necessary information here
              </p>
            </div>
            <div className="flex flex-col gap-6 grow">
              <AdminFormSection fields={section.fields} />
            </div>
          </div>
        </div>
      ))}
    </form>
  </Form>
);

export { AdminCustomForm };
