"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useRegister from "@/hooks/use-register";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { province } from "@/lib/auth";

interface props {
  role: string;
  handlechange: (e: string) => void;
  placeholder: string;
  label?: string;
  name: string;
  labelItems: string[];
}
const DropDown = ({
  role,
  handlechange,
  name,
  labelItems,
  label,
  placeholder,
}: props) => {
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor={`${name}`}>{label}</Label>
      <Select value={role} name={`${name}`} onValueChange={handlechange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`${placeholder}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {labelItems.map((item, index) => (
              <SelectItem key={index} value={item.toLocaleLowerCase()}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

interface inputProops {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  label?: string;
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
}: inputProops) => {
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor={`${name}`}>{label}</Label>
      <Input
        onChange={onChange}
        name={`${name}`}
        id={`${name}`}
        type={`${type}`}
        value={value}
        placeholder={`${placeholder}`}
        required
      />
    </div>
  );
};

export default function RegisterForm({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const [proviences, setProvinces] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await province();
      const result = await response.json();
      setProvinces(result);
    };
    fetchdata();
  }, []);
  const { onChange, onSumit, handlechange, formData } = useRegister();
  return (
    <>
      <form onSubmit={onSumit}>
        <div className="flex flex-col gap-6">
          <div className="w-full flex gap-2 items-center justify-center">
            <InputField
              name={"name"}
              value={formData.name}
              label="Full Name"
              onChange={onChange}
              placeholder={" Full Name"}
              type={"text"}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={onChange}
              name="email"
              id="email"
              type="email"
              value={formData.email}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="w-full flex gap-2 items-center justify-center">
            <DropDown
              role={formData.province_id}
              handlechange={handlechange}
              placeholder={"Select your provience"}
              label={"Provience"}
              name={"province_id"}
              labelItems={["User", "Vendor"]}
            />
            <DropDown
              role={formData.district_id}
              handlechange={handlechange}
              placeholder={"Select your district"}
              label={"District"}
              name={"district_id"}
              labelItems={["User", "Vendor"]}
            />
          </div>
          <div className="w-full flex gap-2 items-center justify-center">
            <DropDown
              role={formData.municipality_id}
              handlechange={handlechange}
              placeholder={"Select your Municiplity"}
              label={"Municiplity"}
              name={"municipality_id"}
              labelItems={["User", "Vendor"]}
            />
            <InputField
              name={"address"}
              value={formData.address}
              onChange={onChange}
              placeholder={"Enter your address"}
              type={"text"}
            />
          </div>

          <InputField
            name={"password"}
            value={formData.password}
            onChange={onChange}
            placeholder={"******"}
            type={"password"}
          />
          <InputField
            name={"password_confirmation"}
            value={formData.password_confirmation}
            onChange={onChange}
            placeholder={"******"}
            type={"password"}
          />

          <Button type="submit" className="w-full">
            Register
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
