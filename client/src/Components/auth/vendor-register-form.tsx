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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface props {
  role: string;
  handlechange: (e: string) => void;
  placeholder: string;
  label: string;
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
  type: string;
  label?: string;
}
const InputField = ({
  name,
  onChange,
  placeholder,
  type,
  required,
  label,
  value,
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

export default function OrganizationRegisterForm({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const {
    email,
    name,
    onChange,
    onSumit,
    password,
    password_confirmation,
    handlechange,
    role,
  } = useRegister();
  return (
    <>
      <form onSubmit={onSumit}>
        <div className="flex flex-col gap-6">
          <div className="w-full flex gap-2 items-center justify-center">
            <InputField
              name={"name"}
              value={name}
              onChange={onChange}
              placeholder={"Organization Name"}
              label="Organization Name"
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
              value={email}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="w-full flex gap-2 items-center justify-center">
            <DropDown
              role={role}
              handlechange={handlechange}
              placeholder={"Select your provience"}
              label={"Provience"}
              name={"provience"}
              labelItems={["User", "Vendor"]}
            />
            <DropDown
              role={role}
              handlechange={handlechange}
              placeholder={"Select your district"}
              label={"District"}
              name={"district"}
              labelItems={["User", "Vendor"]}
            />
          </div>
          <div className="w-full flex gap-2 items-center justify-center">
            <DropDown
              role={role}
              handlechange={handlechange}
              placeholder={"Select your Municiplity"}
              label={"Municiplity"}
              name={"municiplity"}
              labelItems={["User", "Vendor"]}
            />
            <InputField
              name={"address"}
              label="Address"
              value={password_confirmation}
              onChange={onChange}
              placeholder={"Enter your address"}
              type={"text"}
            />
          </div>

          <div className="w-full flex gap-2 items-center justify-center">
            <InputField
              onChange={onChange}
              placeholder={"Enter your name"}
              name={"chairman"}
              value={""}
              type={"text"}
            />
            <InputField
              name={"stamp"}
              value={""}
              onChange={onChange}
              placeholder={"Enter your stamp"}
              type={"file"}
            />
          </div>

          <div className="w-full flex gap-2 items-center justify-center">
            <InputField
              name={"pan no"}
              value={""}
              onChange={onChange}
              placeholder={"Enter your pan No"}
              type={"number"}
            />
            <InputField
              name={"estiblished date"}
              value={"password_confirmation"}
              onChange={onChange}
              placeholder={"Established date"}
              type={"date"}
            />
          </div>

          <InputField
            name={"password"}
            value={password}
            onChange={onChange}
            placeholder={"******"}
            type={"password"}
          />
          <InputField
            name={"password_confirmation"}
            value={password_confirmation}
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
