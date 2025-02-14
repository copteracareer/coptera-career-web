"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { FormFieldComponent, FormFieldConfig } from "./FormFieldComponent";

interface FormSectionProps {
  fields: Array<FormFieldConfig | FormFieldConfig[]>;
}

const AdminFormSection = ({ fields }: FormSectionProps) => {
  const { control } = useFormContext();

  return (
    <div className="space-y-6">
      {fields.map((fieldItem, index) => {
        if (Array.isArray(fieldItem)) {
          return (
            <div className="flex gap-3" key={index}>
              {fieldItem.map((nestedField) => (
                <FormFieldComponent
                  key={nestedField.name}
                  control={control}
                  fieldItem={nestedField}
                />
              ))}
            </div>
          );
        } else {
          return (
            <FormFieldComponent
              key={fieldItem.name}
              control={control}
              fieldItem={fieldItem}
            />
          );
        }
      })}
    </div>
  );
};

export { AdminFormSection };
