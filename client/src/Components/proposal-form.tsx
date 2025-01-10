"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
import { toast } from "react-toastify";
import BasicInfo from "./steps/BasicInfo";
import TimelineInfo from "./steps/TimelineInfo";
import Milestones from "./steps/Milestones";
import Documents from "./steps/Documents";
import Review from "./steps/Review";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, name: "Basic Info" },
  { id: 2, name: "Timeline" },
  { id: 3, name: "Milestones" },
  { id: 4, name: "Documents" },
  { id: 5, name: "Review" },
];

const ProjectFormWrapper = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const methods = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    // Only process submission on the review step
    if (currentStep !== steps.length) {
      nextStep();
      return;
    }

    try {
      setIsSubmitting(true);
      console.log("Form data:", data);

      // Create FormData instance for file upload
      const formData = new FormData();

      // Append all non-file data
      Object.keys(data).forEach((key) => {
        if (key !== "documents") {
          formData.append(
            key,
            typeof data[key] === "object"
              ? JSON.stringify(data[key])
              : data[key]
          );
        }
      });

      // Append documents if they exist
      if (data.documents) {
        Array.from(data.documents).forEach((file: File, index: number) => {
          formData.append(`documents[${index}]`, file);
        });
      }

      // Here you would send the formData to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Project submitted successfully!");
      // Optionally reset form or redirect
      methods.reset();
      setCurrentStep(1);
    } catch (error) {
      toast.error("Failed to submit project");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  currentStep >= step.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                )}
              >
                {step.id}
              </div>
              <div
                className={cn(
                  "ml-2 text-sm font-medium",
                  currentStep >= step.id ? "text-blue-600" : "text-gray-600"
                )}
              >
                {step.name}
              </div>
              {step.id < steps.length && (
                <div
                  className={cn(
                    "w-12 h-1 mx-2",
                    currentStep > step.id ? "bg-blue-600" : "bg-gray-200"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          {currentStep === 1 && <BasicInfo />}
          {currentStep === 2 && <TimelineInfo />}
          {currentStep === 3 && <Milestones />}
          {currentStep === 4 && <Documents />}
          {currentStep === 5 && <Review />}

          <div className="flex justify-between pt-6">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={isSubmitting}
              >
                Previous
              </Button>
            )}
            <Button
              type="submit"
              className="ml-auto bg-green-600 hover:bg-green-700"
              disabled={isSubmitting}
            >
              {currentStep < steps.length
                ? "Next"
                : isSubmitting
                ? "Submitting..."
                : "Submit Project"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProjectFormWrapper;
