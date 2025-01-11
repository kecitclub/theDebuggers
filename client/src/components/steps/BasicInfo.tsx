"use client";
4;
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
// import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
// import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

interface MyEditorProps {
  placeholder?: string;
}

interface JoditEditorConfig {
  readonly?: boolean;
  placeholder?: string;
  controls?: object;
  buttons?: string[];
}

const INITIAL_LOCATION = {
  location: "",
  coordinates: { lat: null, lng: null },
};

const BasicInfo: React.FC<MyEditorProps> = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config: JoditEditorConfig = useMemo(
    () => ({
      readonly: false,
      style: {
        fontFamily: "Arial Black", // Set default font family to Arial Black
      },
      defaultFont: "Arial Black",
      controls: {
        fontsize: {
          default: "16px", // You can set the default font size if needed
        },
        font: {
          list: {
            "Arial Black": "Arial Black", // Include Arial Black in font options
          },
        },
      },
      buttons: ["bold", "italic"],
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [isUrgent, setIsUrgent] = useState(false); // Watch the "urgent" field state
  const [locationError, setLocationError] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [location, setLocation] = useState(INITIAL_LOCATION);

  const detectLocation = async () => {
    setLocationError("");
    setIsLocating(true);

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch location details");
          }

          const data = await response.json();

          if (data.results && data.results.length > 0) {
            const locationData = data.results[0];
            const address = locationData.formatted;
            const { lat, lng } = locationData.geometry;

            // Update state with location data
            setLocation({
              location: address,
              coordinates: { lat, lng },
            });

            // Update form field with detected location
            setValue("location", address);
          } else {
            throw new Error("No location details found");
          }
        } catch (error) {
          setLocationError("Failed to get location details");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        setLocationError(error.message || "Unable to retrieve your location");
        setIsLocating(false);
      }
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Project title"
          {...register("title", {
            required: "Target community is required",
          })}
        />
        {errors.target_community && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>
      {/* Project Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Project Description</Label>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          className="text-black h-[80vh]"
          onChange={(newContent) => setContent(newContent)}
        />

        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              id="location"
              placeholder="Project location"
              {...register("location", { required: "Location is required" })}
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              onClick={detectLocation}
              disabled={isLocating}
            >
              <MapPin className="mr-2 h-4 w-4" />
              {isLocating ? "Detecting..." : "Detect Location"}
            </Button>
          </div>
          {locationError && (
            <Alert variant="destructive">
              <AlertDescription>{locationError}</AlertDescription>
            </Alert>
          )}
        </div>
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location.message}</p>
        )}
      </div>

      {/* Target Community */}
      <div className="space-y-2">
        <Label htmlFor="target_community">Target Community</Label>
        <Input
          id="target_community"
          placeholder="Who will benefit from this project?"
          {...register("target_community", {
            required: "Target community is required",
          })}
        />
        {errors.target_community && (
          <p className="text-red-500 text-sm">
            {errors.target_community.message}
          </p>
        )}
      </div>

      {/* Expected Impact */}
      <div className="space-y-2">
        <Label htmlFor="expected_impact">Expected Impact</Label>
        <Textarea
          id="expected_impact"
          placeholder="What impact do you expect this project to have?"
          {...register("expected_impact", {
            required: "Expected impact is required",
          })}
        />
        {errors.expected_impact && (
          <p className="text-red-500 text-sm">
            {errors.expected_impact.message}
          </p>
        )}
      </div>

      {/* Urgency */}
      <div className="flex items-center space-x-2">
        <Switch
          id="urgent"
          {...register("urgent")}
          onClick={() => {
            setIsUrgent(!isUrgent);
          }}
        />
        <Label htmlFor="urgent">Is this project urgent?</Label>
      </div>

      {/* Why Urgent */}
      {isUrgent && (
        <div className="space-y-2">
          <Label htmlFor="why_urgent">Why is this urgent?</Label>
          <Textarea
            id="why_urgent"
            placeholder="Please explain why this project is urgent..."
            {...register("why_urgent", {
              required: isUrgent
                ? "Please explain why this project is urgent"
                : false,
            })}
          />
          {errors.why_urgent && (
            <p className="text-red-500 text-sm">{errors.why_urgent.message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BasicInfo;
