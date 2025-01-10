import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Plus, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Milestones = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "timelines",
  });

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="p-4 border rounded-lg relative">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={() => remove(index)}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="grid gap-4">
            <div>
              <Label>Milestone Name</Label>
              <Input
                {...register(`timelines.${index}.name`)}
                placeholder="Milestone name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Start Date</Label>
                <Input
                  type="date"
                  {...register(`timelines.${index}.start_date`)}
                />
              </div>
              <div>
                <Label>End Date</Label>
                <Input
                  type="date"
                  {...register(`timelines.${index}.end_date`)}
                />
              </div>
            </div>

            <div>
              <Label>Estimated Cost</Label>
              <Input
                type="number"
                {...register(`timelines.${index}.estimated_cost`)}
                placeholder="Cost in dollars"
              />
            </div>

            <div>
              <Label>Status</Label>
              <Input
                {...register(`timelines.${index}.status`)}
                placeholder="Current status"
              />
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() =>
          append({
            name: "",
            start_date: "",
            end_date: "",
            estimated_cost: "",
            status: "pending",
          })
        }
        className="w-full"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Milestone
      </Button>
    </div>
  );
};

export default Milestones;
