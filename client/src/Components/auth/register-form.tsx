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

export default function RegisterForm({
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
          <div className="grid gap-2">
            <Label htmlFor="email">Name</Label>
            <Input
              onChange={onChange}
              id="name"
              type="text"
              name="name"
              value={name}
              placeholder="John Doe"
              required
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

          <div className="grid gap-2">
            <Label htmlFor="email">Password</Label>
            <Input
              onChange={onChange}
              id="password"
              name="password"
              type="password"
              value={password}
              placeholder="*****"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">re_Password</Label>
            <Input
              onChange={onChange}
              name="password_confirmation"
              id="password_confirmation"
              type="password"
              value={password_confirmation}
              placeholder="******"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">role</Label>
            <Select value={role} onValueChange={handlechange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="vendor">Vendor</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Register
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="d" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </form>
    </>
  );
}
