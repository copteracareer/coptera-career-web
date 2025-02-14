import { Button, ButtonVariant } from "@/components/ui/button";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import DynamicBreadcrumb from "./dynamicBreadcrumb";

export interface ButtonConfig {
  label: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
}

interface ContentPageProps {
  title: string;
  button: ButtonConfig[];
  children?: React.ReactNode;
  form?: UseFormReturn<any>;
}

const ContentPageComponent = ({
  title,
  button,
  children,
  form,
}: ContentPageProps) => {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="px-8 pt-8 flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <DynamicBreadcrumb />
        </div>
        <div className="flex items-center gap-4">
          {button.map(({ label, icon, variant, onClick }) => (
            <Button
              key={label}
              variant={variant}
              className="px-6 py-3 text-sm flex gap-2"
              onClick={() => {
                if (form && onClick) {
                  form.handleSubmit(onClick)();
                } else if (onClick) {
                  onClick();
                }
              }}
            >
              {icon}
              {label}
            </Button>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default ContentPageComponent;
