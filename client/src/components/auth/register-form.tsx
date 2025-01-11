"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useRegister from "@/hooks/use-register";
import { useEffect, useState } from "react";
import { province, district, municipalities } from "@/lib/auth";

// DropDown Component
interface DropDownProps {
  handlechange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  label?: string;
  name: string;
  labelItems: {
    id: string;
    name: string;
  }[];
}

const DropDown = ({
  handlechange,
  name,
  labelItems,
  label,
  placeholder,
}: DropDownProps) => {
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor={name}>{label}</Label>
      <select
        name={name}
        id={name}
        onChange={handlechange}
        className="w-full border rounded px-2 py-1"
      >
        <option value="">{placeholder}</option>
        {labelItems.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

// InputField Component
interface InputFieldProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  label: string;
  type: string;
}

const InputField = ({
  name,
  onChange,
  placeholder,
  type,
  required,
  value,
  label,
}: InputFieldProps) => {
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

// Main RegisterForm Component
export default function RegisterForm({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const [provinces, setProvinces] = useState<{ id: string; name: string }[]>(
    []
  );
  const [districts, setDistricts] = useState<{ id: string; name: string }[]>(
    []
  );
  const [municipalitiesList, setMunicipalitiesList] = useState<
    { id: string; name: string }[]
  >([]);

  const { onChange, onSumit, handlechange, formData, loading } = useRegister();

  const handleProvinceChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const provinceId = e.target.value;
    const response = await district(provinceId);
    setDistricts(response);
    handlechange(e); // Update formData
  };

  const handleDistrictChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const districtId = e.target.value;
    const response = await municipalities(districtId);
    setMunicipalitiesList(response);
    handlechange(e); // Update formData
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await province();
      setProvinces(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={onSumit}>
        <input type="hidden" name="role" value={"user"} />
        <div className="flex flex-col gap-6">
          <InputField
            name="name"
            value={formData.name}
            label="Full Name"
            onChange={onChange}
            placeholder="Full Name"
            type="text"
          />

          <InputField
            name="email"
            value={formData.email}
            label="Email"
            onChange={onChange}
            placeholder="m@example.com"
            type="email"
          />

          <div className="grid gap-4">
            <DropDown
              handlechange={handleProvinceChange}
              placeholder="Select your province"
              label="Province"
              name="province_id"
              labelItems={provinces}
            />
            <DropDown
              handlechange={handleDistrictChange}
              placeholder="Select your district"
              label="District"
              name="district_id"
              labelItems={districts}
            />
            <DropDown
              handlechange={handlechange}
              placeholder="Select your municipality"
              label="Municipality"
              name="municipality_id"
              labelItems={municipalitiesList}
            />
          </div>

          <InputField
            label="Address"
            name="address"
            value={formData.address}
            onChange={onChange}
            placeholder="Enter your address"
            type="text"
          />

          <InputField
            label="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
            placeholder="******"
            type="password"
          />

          <InputField
            label="Password Confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={onChange}
            placeholder="******"
            type="password"
          />

          <Button type="submit" className="w-full">
            {loading ? "loading..." : "Register"}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/auth/login" className="underline underline-offset-4">
            Sign in
          </a>
        </div>
      </form>
    </>
  );
}
