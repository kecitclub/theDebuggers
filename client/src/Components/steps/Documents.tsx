import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";

const Documents = () => {
  const { register, setValue } = useFormContext();
  const [filePreviews, setFilePreviews] = useState([]);
  const [files, setFiles] = useState([]);

  // Handle file upload and update previews
  const handleFileChange = (e) => {
    const uploadedFiles = e.target.files;
    setFiles(uploadedFiles);

    // Generate preview URLs for the uploaded files
    const fileUrls = Array.from(uploadedFiles).map((file) =>
      URL.createObjectURL(file)
    );
    setFilePreviews(fileUrls);

    // Update form value with the files (for form submission)
    setValue("documents", uploadedFiles);
  };

  return (
    <div className="space-y-6">
      <div className="border-2 border-dashed rounded-lg p-8 text-center">
        <Input
          type="file"
          multiple
          {...register("documents")}
          className="hidden"
          id="documents"
          onChange={handleFileChange}
        />
        <Label
          htmlFor="documents"
          className="flex flex-col items-center cursor-pointer"
        >
          <Upload className="h-12 w-12 text-gray-400 mb-4" />
          <span className="text-lg font-medium mb-2">
            Drop files here or click to upload
          </span>
          <span className="text-sm text-gray-500">
            Upload any relevant project documents
          </span>
        </Label>
      </div>

      {/* Document Previews */}
      {filePreviews.length > 0 && (
        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold">Uploaded Files</h3>
          <div className="grid grid-cols-3 gap-4">
            {filePreviews.map((preview, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={preview}
                  alt={`file-preview-${index}`}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <span className="text-sm text-gray-500 mt-2">
                  {files[index] ? files[index].name : "Unknown File"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
