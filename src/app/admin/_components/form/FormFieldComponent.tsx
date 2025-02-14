import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "number" | "select" | "email" | "date";
  placeholder: string;
  selectOptions?: Array<{ value: string; label: string }>;
}

interface FormFieldComponentProps {
  control: Control<any>;
  fieldItem: FormFieldConfig;
}

const FormFieldComponent: React.FC<FormFieldComponentProps> = ({
  control,
  fieldItem,
}) => {
  return (
    <FormField
      control={control}
      name={fieldItem.name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{fieldItem.label}</FormLabel>
          <FormControl>
            {fieldItem.type === "select" ? (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={fieldItem.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {fieldItem.selectOptions?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                {...field}
                type={fieldItem.type}
                placeholder={fieldItem.placeholder}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { FormFieldComponent };
