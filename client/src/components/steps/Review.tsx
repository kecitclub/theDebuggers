import { useFormContext } from "react-hook-form";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Review = () => {
  const { watch } = useFormContext();
  const formData = watch();

  const formatDate = (date: Date) => {
    if (!date) return "Not set";
    return format(new Date(date), "PPP");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">Description</h4>
            <p className="text-gray-600">
              {formData.description || "Not provided"}
            </p>
          </div>
          <div>
            <h4 className="font-medium">Location</h4>
            <p className="text-gray-600">
              {formData.location || "Not provided"}
            </p>
          </div>
          <div>
            <h4 className="font-medium">Target Community</h4>
            <p className="text-gray-600">
              {formData.target_community || "Not provided"}
            </p>
          </div>
          <div>
            <h4 className="font-medium">Expected Impact</h4>
            <p className="text-gray-600">
              {formData.expected_impact || "Not provided"}
            </p>
          </div>
          {formData.urgent && (
            <div>
              <h4 className="font-medium">Urgency Reason</h4>
              <p className="text-gray-600">
                {formData.why_urgent || "Not provided"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Timeline Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">Estimated Start Date</h4>
            <p className="text-gray-600">
              {formatDate(formData.estimated_start_date)}
            </p>
          </div>
          <div>
            <h4 className="font-medium">Expected Completion Date</h4>
            <p className="text-gray-600">
              {formatDate(formData.expected_completion_date)}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          {formData.timelines?.map((timeline: any, index: number) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <h4 className="font-medium">{timeline.name}</h4>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p>{timeline.start_date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">End Date</p>
                  <p>{timeline.end_date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Estimated Cost</p>
                  <p>${timeline.estimated_cost}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p>{timeline.status}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documents</CardTitle>
        </CardHeader>
        <CardContent>
          {formData.documents ? (
            <ul className="list-disc pl-4">
              {console.log(formData.documents)}
              {Array.from(formData.documents).map(
                (file: File, index: number) => (
                  <li key={index} className="text-gray-600">
                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                  </li>
                )
              )}
            </ul>
          ) : (
            <p className="text-gray-600">No documents uploaded</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Review;
